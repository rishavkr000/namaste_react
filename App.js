import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30532",
          name: "Hotel Empire",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          locality: "Infantry Road\t",
          areaName: "Infantry Road",
          costForTwo: "₹450 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 4.5,
          parentId: "475",
          avgRatingString: "4.5",
          totalRatingsString: "19K+",
          promoted: true,
          adTrackingId:
            "cid=29377095~p=4~adgrpid=29377095#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30532~plpr=COLLECTION~eid=919c1520-e523-44bb-b835-317ccfeee01a~srvts=1747835613386~collid=83639",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-22 02:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "19K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3241",
          name: "Meghana Foods",
          cloudinaryImageId: "iivuhjc2mswi9lublktf",
          locality: "Residency Road",
          areaName: "Residency Road",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
          avgRating: 4.7,
          parentId: "635",
          avgRatingString: "4.7",
          totalRatingsString: "84K+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-21 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "102334",
          name: "Dindigul Thalappakatti",
          cloudinaryImageId: "ogidjgqgh5w4otvuiipj",
          locality: "Mg Road",
          areaName: "Indiranagar",
          costForTwo: "₹650 for two",
          cuisines: [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian",
          ],
          avgRating: 4.4,
          parentId: "332",
          avgRatingString: "4.4",
          totalRatingsString: "9.3K+",
          promoted: true,
          adTrackingId:
            "cid=29190411~p=5~adgrpid=29190411#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~plpr=COLLECTION~eid=d6770496-2563-430b-ac97-6cfee7004b1a~srvts=1747835613386~collid=83639",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-21 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹179",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29190411",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=102334&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "41100",
          name: "Nagarjuna - Since 1984",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/9a2fadcb-1c9d-4fb2-b651-1af9521d9ced_6e8d69fa-962d-42f6-a715-98dd100d27f9.png",
          locality: "Residency Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹600 for two",
          cuisines: [
            "Andhra",
            "South Indian",
            "Biryani",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.6,
          parentId: "509973",
          avgRatingString: "4.6",
          totalRatingsString: "47K+",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-21 22:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=41100&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "63048",
          name: "Sharief Bhai Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/21/cdad749f-165b-4aaa-b6b9-1c6f966494b0_a8628830-65ec-43e0-8455-9f4a2ae41001.jpg",
          locality: "Frazer Town",
          areaName: "Frazer Town",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "South Indian",
            "Kebabs",
            "Ramzan Special",
            "Sweets",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "469102",
          avgRatingString: "4.3",
          totalRatingsString: "47K+",
          promoted: true,
          adTrackingId:
            "cid=29254407~p=7~adgrpid=29254407#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63048~plpr=COLLECTION~eid=5a61e900-b838-4edf-b81d-dffca7c4437e~srvts=1747835613386~collid=83639",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-21 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹199",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29254407",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=63048&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "252412",
          name: "Anjappar",
          cloudinaryImageId: "60e4230b5b427968d26f8bdb1ba90362",
          locality: "Brigade Road",
          areaName: "Brigade Road",
          costForTwo: "₹400 for two",
          cuisines: [
            "Chettinad",
            "Thalis",
            "Biryani",
            "Chinese",
            "Tandoor",
            "South Indian",
          ],
          avgRating: 4.1,
          parentId: "61",
          avgRatingString: "4.1",
          totalRatingsString: "4.5K+",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-21 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "66% OFF",
            subHeader: "UPTO ₹146",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "1.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=252412&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "353404",
          name: "RNR Biryani - Taste of 1953",
          cloudinaryImageId: "titgwthozpmhyzjgdh5u",
          locality: "Shivanahalli",
          areaName: "Rajajinagar",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani", "South Indian", "Kebabs"],
          avgRating: 4.3,
          parentId: "11620",
          avgRatingString: "4.3",
          totalRatingsString: "6.8K+",
          promoted: true,
          adTrackingId:
            "cid=29377193~p=10~adgrpid=29377193#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=353404~plpr=COLLECTION~eid=f1180ad6-3ac2-4902-9dfd-f30bfae76685~srvts=1747835613386~collid=83639",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-22 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29377193",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=353404&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestfaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img-logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="
          alt="App Logo"
        />
      </div>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {/* search */}
      {/* Restaurent Container */}
      {/* Restaurent Card */}

      <div className="search">
        <input className="input" type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurentCard key={res.card.card.info.id} resData={res}/>
        ))}
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Meghana Food Logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const AppComp = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComp />);
