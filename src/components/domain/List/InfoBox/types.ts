interface ITabState {
  firstTabSelected: boolean;
  listItems: any[];
}

interface InfoBoxProps {
  tabState: ITabState;
  listInfo: number | string;
}

export type { InfoBoxProps };
