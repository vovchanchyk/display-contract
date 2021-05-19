/* eslint-disable max-len */
import Web3 from 'web3';
import getEth from '../math/getEth';
import getUsd from '../math/getUsd';

const ABI = require('./ABI.json');

type GroupType = {
    name:string;
    indexes:string[];
}
export type ContractDataType = {
    groupName:string;
    cards:CardType[];
}
export type CardType ={
    id:number;
    name:string;
    usd:string;
    eth:string;
    percentCange: string;
}

type IndexType = {
     id : number;
    name : string;
    ethPriceInWei : number;
    usdPriceInCents: number;
    usdCapitalization :number;
    percentageChange: number ;
}

const adrs = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';

const web3 = new Web3('https://ropsten.infura.io/v3/c07b6632ca334279b7d83bb0ba4580fa');
// const contract = new web3.eth.Contract(ABI,adrs)

function getCardsPromise(arr: string[][]) {
  const contract = new web3.eth.Contract(ABI, adrs);
  const promises = arr.map((arr) => arr.map((i: any) => contract.methods.getIndex(i).call().then((ress: any) => ress)));
  const ress = promises.map(async (promises) => {
    const data = await Promise.all(promises).then((data) => data);
    return data;
  });
  return ress;
}

async function getDataFromContract():Promise<ContractDataType[]> {
  const contract = new web3.eth.Contract(ABI, adrs);
  const groupIds = await contract.methods.getGroupIds().call().then((ress: any) => ress);
  // console.log(groupIds)
  // ,get promisses to use their as promise.all then
  const groupPromises = groupIds.map((Id:string) => contract.methods.getGroup(Id).call().then((ress:GroupType[]) => ress));
  const groups : GroupType[] = await Promise.all(groupPromises).then((ress: GroupType[] | any) => ress);

  const groupIndexes = groups.map((el:GroupType) => el.indexes);
  // console.log(groupIndexes)
  const cardsPromises = getCardsPromise(groupIndexes);

  const cardsPromise = Promise.all(cardsPromises).then((ress) => ress).then((ress) => ress);
  const cards:IndexType[]|IndexType|any = await cardsPromise.then((ress) => ress);

  return groups.map((group, i) => ({
    groupName: group.name,

    cards: cards[i].map((el:IndexType, i: number) => ({
      id: i,
      name: el.name,
      usd: getUsd(+el.usdCapitalization),
      eth: getEth(el.usdPriceInCents, el.usdCapitalization),
      percentCange: el.percentageChange > 0 ? `+${el.percentageChange}%` : `${el.percentageChange}%`,
    })),
  }));
}

export default getDataFromContract;
