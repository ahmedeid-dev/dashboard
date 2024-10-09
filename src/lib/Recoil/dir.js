import { atom } from 'recoil';

export const dirLayoutState = atom({
    key: 'dirLayoutState',
    default: 'ltr', // default layout
});
