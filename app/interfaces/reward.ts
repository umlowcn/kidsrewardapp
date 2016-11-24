export interface IReward {
    _id: number;
    behaviour: string;
    behaviours: IBehaviour[];
    star: number;
    type: string;
}

export interface IBehaviour {
    description: string;
    earned: boolean;
}