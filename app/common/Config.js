/** @format */

import Images from "./Images";
import Constants from "./Constants";
import Icons from "./Icons";
export default {
  ProductSize: {
    enable: true,
  },
  HomeCategories: [
    {
      category: 18,
      image: require("@images/categories_icon/ic_shorts.png"),
      colors: ["#4facfe", "#00f2fe"],
      label: "Men",
    },
    {
      category: 21,
      image: require("@images/categories_icon/ic_tshirt.png"),
      colors: ["#43e97b", "#38f9d7"],
      label: "T-Shirts",
    },
    {
      category: 208,
      image: require("@images/categories_icon/ic_panties.png"),
      colors: ["#fa709a", "#fee140"],
      label: "Clothing",
    },
    {
      category: 26,
      image: require("@images/categories_icon/ic_dress.png"),
      colors: ["#7F00FF", "#E100FF"],
      label: "Dresses",
    },
    {
      category: 24,
      image: require("@images/categories_icon/ic_glasses.png"),
      colors: ["#30cfd0", "#330867"],
      label: "Bags",
    },
  ],
  HomeCategories_AR: [
    {
      category: 18,
      image: require("@images/categories_icon/ic_shorts.png"),
      colors: ["#4facfe", "#00f2fe"],
      label: "لكن",
    },
    {
      category: 21,
      image: require("@images/categories_icon/ic_tshirt.png"),
      colors: ["#43e97b", "#38f9d7"],
      label: "تي شيرت",
    },
    {
      category: 208,
      image: require("@images/categories_icon/ic_panties.png"),
      colors: ["#fa709a", "#fee140"],
      label: "ملابس",
    },
    {
      category: 26,
      image: require("@images/categories_icon/ic_dress.png"),
      colors: ["#7F00FF", "#E100FF"],
      label: "فساتين",
    },
    {
      category: 24,
      image: require("@images/categories_icon/ic_glasses.png"),
      colors: ["#30cfd0", "#330867"],
      label: "أكياس",
    },
  ],
  Payments: {
    cod: require("@images/payment_logo/cash_on_delivery.png"),
  },
  shipping: {
    visible: true,
    zoneId: 1, // depend on your woocommerce
    time: {
      free_shipping: "4 - 7 Days",
      flat_rate: "1 - 4 Days",
      local_pickup: "1 - 4 Days",
    },
  },
  showStatusBar: true,
  LogoImage: require("@images/logo-main.png"),
  LogoWithText: require("@images/logo_with_text.png"),
  LogoLoading: require("@images/logo.png"),
  intro: [
    {
      key: "page1",
      title: "Welcome to Recomode!",
      text: "Get the hottest fashion by trend and season right on your pocket.",
      icon: "ios-basket",
      colors: ["#0FF0B3", "#036ED9"],
    },
    {
      key: "page2",
      title: "Secure Payment",
      text: "All your payment infomation is top safety and protected",
      icon: "ios-card",
      colors: ["#13f1fc", "#0470dc"],
    },
    {
      key: "page3",
      title: "High Performance",
      text: "Saving your value time and buy product with ease",
      icon: "ios-finger-print",
      colors: ["#b1ea4d", "#459522"],
    },
  ],
  menu: {
    // has child categories
    isMultiChild: true,
    // Unlogged
    listMenuUnlogged: [
      {
        text: "Login",
        routeName: "LoginScreen",
        params: {
          isLogout: false,
        },
        icon: Icons.MaterialCommunityIcons.SignIn,
      },
    ],
    // user logged in
    listMenuLogged: [
      {
        text: "Logout",
        routeName: "LoginScreen",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SignOut,
      },
    ],
    // Default List
    listMenu: [
      {
        text: "Shop",
        routeName: "Home",
        icon: Icons.MaterialCommunityIcons.Home,
      },
      {
        text: "News",
        routeName: "NewsScreen",
        icon: Icons.MaterialCommunityIcons.News,
      },
      {
        text: "contactus",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Pin,
      },
      {
        text: "About",
        routeName: "CustomPage",
        params: {
        },
        icon: Icons.MaterialCommunityIcons.Email,
      },
    ],
  },

  // define menu for profile tab
  ProfileSettings: [
    {
      label: "WishList",
      routeName: "WishListScreen",
    },
    {
      label: "MyOrder",
      routeName: "MyOrders",
    },
    {
      label: "Address",
      routeName: "Address",
    },
    {
      label: "Currency",
      isActionSheet: true,
    },
    {
      label: "Languages",
      routeName: "SettingScreen",
    },
    {
      label: "PushNotification",
    },
    {
      label: "DarkTheme",
    },
    {
      label: "contactus",
      routeName: "CustomPage",
      params: {
        id: 10941,
        title: "contactus",
      },
    },
    {
      label: "Privacy",
      routeName: "CustomPage",
      params: {

      },
    },
    {
      label: "termCondition",
      routeName: "CustomPage",
      params: {

      },
    },
    {
      label: "About",
      routeName: "CustomPage",
      params: {
      },
    },
  ],

  // Homepage Layout setting
  layouts: [
    {
      layout: Constants.Layout.card,
      image: Images.icons.iconCard,
      text: "cardView",
    },
    {
      layout: Constants.Layout.simple,
      image: Images.icons.iconRight,
      text: "simpleView",
    },
    {
      layout: Constants.Layout.twoColumn,
      image: Images.icons.iconColumn,
      text: "twoColumnView",
    },
    {
      layout: Constants.Layout.threeColumn,
      image: Images.icons.iconThree,
      text: "threeColumnView",
    },
    {
      layout: Constants.Layout.horizon,
      image: Images.icons.iconHorizal,
      text: "horizontal",
    },
    {
      layout: Constants.Layout.advance,
      image: Images.icons.iconAdvance,
      text: "advanceView",
    },
  ],

  // Default theme loading, this could able to change from the user profile (reserve feature)
  Theme: {
    isDark: false,
  },

  // new list category design
  CategoriesLayout: Constants.CategoriesLayout.card,
  DefaultCurrency: {
    symbol: "PKRs",
    name: "Pakistani Rupee",
    symbol_native: "₨",
    decimal_digits: 0,
    rounding: 0,
    code: "PKR",
    name_plural: "Pakistani rupees",
    decimal: ".",
    thousand: ",",
    precision: 2,
    format: "%s%v", // %s is the symbol and %v is the value
  },

  DefaultCountry: {
    code: "en",
    RTL: false,
    language: "English",
    countryCode: "PKR",
    hideCountryList: false,
  },

  OneSignal: {
    appId: "43948a3d-da03-4e1a-aaf4-cb38f0d9ca51",
  },
  /**
   * Login required
   */
  Login: {
    RequiredLogin: false, // required before using the app
    AnonymousCheckout: false, // required before checkout or checkout anonymous
  },

  Layout: {
    HideHomeLogo: false,
    HideLayoutModal: false,
  },

  Affiliate: { enable: false },

  EnableOnePageCheckout: false,

  NativeOnePageCheckout: true,

  // using url from server to load AppConfig.json
};
