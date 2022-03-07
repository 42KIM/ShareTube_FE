interface ITabState {
  firstTabSelected: boolean;
  listItems: any[];
}

interface TabProps {
  tabState: ITabState;
  tabHandler: () => void;
}

export type { TabProps };
