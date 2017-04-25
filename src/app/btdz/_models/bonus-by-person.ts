export class BonusByPerson {
  rankNo: number;
  memName: string;
  teamName: string;
  bonus: number;
  maxBonus: number;

  static of(rawData: any): BonusByPerson {
    const result = new BonusByPerson();
    result.rankNo = +rawData.rankNo;
    result.memName = rawData.memName;
    result.teamName = rawData.teamName;
    result.bonus = +rawData.bonus;
    result.maxBonus = +rawData.maxBonus;

    return result;
  }

  static from(rawData: any[]): BonusByPerson[] {
    return rawData.map(BonusByPerson.of);
  }
}
