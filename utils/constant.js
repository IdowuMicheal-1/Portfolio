export const COLORS = {
    lightPurple:'#211F23',
    gray400:'#6F6F6F',
    yellow300:'#C3C99E',
    gray700:"#272727",
    blue300:"#7D9CA5",
    pink300:"#C2C2C2",
    purple300:"#C69AFF",
    purple500:"#9F53FF",
    purple900:"#6104D6",
    gray800:"#131313",
   purples300:"#B292FF",
   purple100:"#9857D3"
}

export const BREAKPOINTS = {
    mobile:500,
    tablet:768,
    laptop:1440
}

export const QUERIES = {
   phoneAndSmaller:`(max-width:${BREAKPOINTS.mobile/16}rem)`,
   tabletAndSmaller:`(max-width:${BREAKPOINTS.tablet/16}rem)`,
   LaptopAndSmaller:`(max-width:${BREAKPOINTS.laptop/16}rem)`
}