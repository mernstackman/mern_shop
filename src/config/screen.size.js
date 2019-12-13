export const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktopS: "1152px",
    desktopM: "1280px",
    desktopL: "2048px",
    desktopXL: "2560px",
};

export const maxDevice = {
    max320: `(max-width:${size.mobileS})`,
    max375: `(max-width:${size.mobileM})`,
    max425: `(max-width:${size.mobileL})`,
    max768: `(max-width:${size.tablet})`,
    max1024: `(max-width:${size.laptop})`,
    max1440: `(max-width:${size.laptopL})`,
    max1152: `(max-width:${size.desktopS})`,
    max1280: `(max-width:${size.desktopM})`,
    max2048: `(max-width:${size.desktopL})`,
    max2560: `(max-width:${size.desktopXL})`,
};

export const minDevice = {
    min320: `(min-width:${size.mobileS})`,
    min375: `(min-width:${size.mobileM})`,
    min425: `(min-width:${size.mobileL})`,
    min768: `(min-width:${size.tablet})`,
    min1024: `(min-width:${size.laptop})`,
    min1440: `(min-width:${size.laptopL})`,
    min1152: `(min-width:${size.desktopS})`,
    min1280: `(min-width:${size.desktopM})`,
    min2048: `(min-width:${size.desktopL})`,
    min2560: `(min-width:${size.desktopXL})`,
};
