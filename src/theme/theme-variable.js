const Lg = '56px';
const H1 = '32px';
const H2 = '24px';
const H3 = '18px';
const baseSize = '16px';
const H4 = '14px';
const H5 = '12px';
const H6 = '10px';

const theme = {
  name: 'theme',
  colors: {
    primaryColor: '#002046', // primary color for all components
    secondaryColor: '#6DB028',
    backgroundColor: '#F9FAFB',
    bodyText: '#535E63',
    bodyTextVariant: '#212A2F',
    tableHeader:'#F4F6F6',
    roundStroke:'#D9D9D9',
    Ulg:'#F6FBFB',
    SliderDots:'#D2D9DC',
    borderColor: '#EFF6F7',
    midGray:'#E7E7E7',
    dangerColor: '#FF4D4F',
    dangerOutline: '#FFCCC7',
    dangerBg: '#FFF1F0',
    warning:'#FAAD14',
    warningOutline:'#FFE58F',
    warningBg:'#FFFBE6',
    success:'#52C41A',
    successOutline:'#B7EB8F',
    successBg:'#F6FFED',
    information:'#1890FF',
    informationOutline:'#91D5FF',
    informationBg:'#E6F7FF',
    whiteColor: '#fff',
    whiteBlack: '#000',
    // onGradient: '#F6F7FA',
    // dividerColor: '##ECEFF1',
    // textMedium: '#5F737C',
    // whiteColor: '#FFF',
    // bodyLight: '#7C8EA1',
    // disableColor: '#889095',
    // highlightColor: '#FD3',
    // textColor: '#FFDD33',
    // footerBgColor: '#001B35',
    // midGray: '#434343'
  },
  fonts: {
    headingLg: Lg,
    headingH1: H1,
    headingH2: H2,
    headingH3: H3,
    headingH4: H4,
    headingH5: H5,
    headingH6: H6,
    baseFontSize:baseSize,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
}

export default theme;
