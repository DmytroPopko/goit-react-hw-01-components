export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
    bgColor: '#dbdbf9',
    colorStats: '#ebebfa',
    bgStats: '#e1aadf',
    bgTransactionTitle: '#09caf1',
  },
  spacing: value => `${4 * value}px`,

  boxShadow:
    '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 2.12)',
});
