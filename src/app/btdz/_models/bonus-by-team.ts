export class BonusByTeam {
  bonusSum: number;
  divisionName: string;
  fightIndex: number;
  maxBonusSum: number;
  memNum: number;
  rankNo: number;
  teamName: string;

  static of(rawData: any): BonusByTeam {
    const result = new BonusByTeam();

    result.bonusSum = +rawData.bonusSum;
    result.divisionName = rawData.divisionName;
    result.fightIndex = +rawData.fightIndex;
    result.maxBonusSum = +rawData.maxBonusSum;
    result.memNum = +rawData.memNum;
    result.rankNo = +rawData.rankNo;
    result.teamName = rawData.teamName;

    return result;
  }

  static from(rawData: any[]): BonusByTeam[] {
    return rawData.map(BonusByTeam.of);
  }
}
