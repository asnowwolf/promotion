export class BonusByArea {
  bonusSum: number;
  divisionName: string;
  fightIndex: number;
  maxBonusSum: number;
  rankNo: number;

  static of(rawData: any): BonusByArea {
    const result = new BonusByArea();
    result.bonusSum = +rawData.bonusSum;
    result.divisionName = rawData.divisionName;
    result.fightIndex = +rawData.fightIndex;
    result.maxBonusSum = +rawData.maxBonusSum;
    result.rankNo = +rawData.rankNo;

    return result;
  }

  static from(rawData: any[]): BonusByArea[] {
    return rawData.map(BonusByArea.of);
  }
}
