interface ITabState {
  isFirstTabSelected: boolean;
  listItems: any[];
}

interface TabProps {
  isFirstTabSelected: boolean;
  tabHandler: () => void;
}

export type { TabProps };
