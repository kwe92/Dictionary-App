declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.jpg';

interface ThemeInterface {
    darkColors: {

        shade0:"rgba(5,5,5,1)",
        shade1:"rgba(31,31,31,1)",
        shade2:"rgba(45,45,45,1)",
        shade3:"rgba(58,58,58,1)",

    },
    lightColors: {
        shade0:"rgba(131,131,131,1)",
        shade1:"rgba(233,233,233,1)",
        shade2:"rgba(242,242,242,1)",
        shade3:"rgba(255,255,255,1)",
    },
    otherColors: {
        purpleColor:"rgba(164,69,237,1)",
        redColor:"rgba(255,82,82,1)",
    }
};