const routesByMode = [
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "bakerloo",
      name: "Bakerloo",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Harrow & Wealdstone Underground Station - Elephant & Castle Underground Station",
          direction: "inbound",
          originationName: "Harrow & Wealdstone Underground Station",
          destinationName: "Elephant & Castle Underground Station",
          originator: "940GZZLUHAW",
          destination: "940GZZLUEAC",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Elephant & Castle Underground Station - Harrow & Wealdstone Underground Station",
          direction: "outbound",
          originationName: "Elephant & Castle Underground Station",
          destinationName: "Harrow & Wealdstone Underground Station",
          originator: "940GZZLUEAC",
          destination: "940GZZLUHAW",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Bakerloo&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "central",
      name: "Central",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Epping Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Epping Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUEPG",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Epping Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Epping Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUEPG",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Epping Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Epping Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUEPG",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Ealing Broadway Underground Station - Epping Underground Station",
          direction: "outbound",
          originationName: "Ealing Broadway Underground Station",
          destinationName: "Epping Underground Station",
          originator: "940GZZLUEBY",
          destination: "940GZZLUEPG",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Ealing Broadway Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "Ealing Broadway Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUEBY",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Epping Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Epping Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUEPG",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Epping Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Epping Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUEPG",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - West Ruislip Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "West Ruislip Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUWRP",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "West Ruislip Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "West Ruislip Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUWRP",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Epping Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Epping Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUEPG",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Ealing Broadway Underground Station - Epping Underground Station",
          direction: "outbound",
          originationName: "Ealing Broadway Underground Station",
          destinationName: "Epping Underground Station",
          originator: "940GZZLUEBY",
          destination: "940GZZLUEPG",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hainault Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Hainault Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUHLT",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Ealing Broadway Underground Station - Hainault Underground Station",
          direction: "outbound",
          originationName: "Ealing Broadway Underground Station",
          destinationName: "Hainault Underground Station",
          originator: "940GZZLUEBY",
          destination: "940GZZLUHLT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Central&serviceTypes=Regular"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Night",
          uri: "/Line/Route?ids=Central&serviceTypes=Night"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "circle",
      name: "Circle",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Road (Circle Line) Underground Station - Hammersmith (H&C Line) Underground Station",
          direction: "inbound",
          originationName: "Edgware Road (Circle Line) Underground Station",
          destinationName: "Hammersmith (H&C Line) Underground Station",
          originator: "940GZZLUERC",
          destination: "940GZZLUHSC",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hammersmith (H&C Line) Underground Station - Edgware Road (Circle Line) Underground Station",
          direction: "outbound",
          originationName: "Hammersmith (H&C Line) Underground Station",
          destinationName: "Edgware Road (Circle Line) Underground Station",
          originator: "940GZZLUHSC",
          destination: "940GZZLUERC",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Circle&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "district",
      name: "District",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Upminster Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Upminster Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUUPM",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Ealing Broadway Underground Station - Upminster Underground Station",
          direction: "outbound",
          originationName: "Ealing Broadway Underground Station",
          destinationName: "Upminster Underground Station",
          originator: "940GZZLUEBY",
          destination: "940GZZLUUPM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Upminster Underground Station - Richmond Underground Station",
          direction: "inbound",
          originationName: "Upminster Underground Station",
          destinationName: "Richmond Underground Station",
          originator: "940GZZLUUPM",
          destination: "940GZZLURMD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Richmond Underground Station - Upminster Underground Station",
          direction: "outbound",
          originationName: "Richmond Underground Station",
          destinationName: "Upminster Underground Station",
          originator: "940GZZLURMD",
          destination: "940GZZLUUPM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Upminster Underground Station - Wimbledon Underground Station",
          direction: "inbound",
          originationName: "Upminster Underground Station",
          destinationName: "Wimbledon Underground Station",
          originator: "940GZZLUUPM",
          destination: "940GZZLUWIM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Wimbledon Underground Station - Upminster Underground Station",
          direction: "outbound",
          originationName: "Wimbledon Underground Station",
          destinationName: "Upminster Underground Station",
          originator: "940GZZLUWIM",
          destination: "940GZZLUUPM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Kensington (Olympia) Underground Station - Upminster Underground Station",
          direction: "outbound",
          originationName: "Kensington (Olympia) Underground Station",
          destinationName: "Upminster Underground Station",
          originator: "940GZZLUKOY",
          destination: "940GZZLUUPM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Road (Circle Line) Underground Station - Ealing Broadway Underground Station",
          direction: "inbound",
          originationName: "Edgware Road (Circle Line) Underground Station",
          destinationName: "Ealing Broadway Underground Station",
          originator: "940GZZLUERC",
          destination: "940GZZLUEBY",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Road (Circle Line) Underground Station - Richmond Underground Station",
          direction: "inbound",
          originationName: "Edgware Road (Circle Line) Underground Station",
          destinationName: "Richmond Underground Station",
          originator: "940GZZLUERC",
          destination: "940GZZLURMD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Richmond Underground Station - Edgware Road (Circle Line) Underground Station",
          direction: "outbound",
          originationName: "Richmond Underground Station",
          destinationName: "Edgware Road (Circle Line) Underground Station",
          originator: "940GZZLURMD",
          destination: "940GZZLUERC",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Road (Circle Line) Underground Station - Wimbledon Underground Station",
          direction: "inbound",
          originationName: "Edgware Road (Circle Line) Underground Station",
          destinationName: "Wimbledon Underground Station",
          originator: "940GZZLUERC",
          destination: "940GZZLUWIM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Wimbledon Underground Station - Edgware Road (Circle Line) Underground Station",
          direction: "outbound",
          originationName: "Wimbledon Underground Station",
          destinationName: "Edgware Road (Circle Line) Underground Station",
          originator: "940GZZLUWIM",
          destination: "940GZZLUERC",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Road (Circle Line) Underground Station - Kensington (Olympia) Underground Station",
          direction: "inbound",
          originationName: "Edgware Road (Circle Line) Underground Station",
          destinationName: "Kensington (Olympia) Underground Station",
          originator: "940GZZLUERC",
          destination: "940GZZLUKOY",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Kensington (Olympia) Underground Station - Edgware Road (Circle Line) Underground Station",
          direction: "outbound",
          originationName: "Kensington (Olympia) Underground Station",
          destinationName: "Edgware Road (Circle Line) Underground Station",
          originator: "940GZZLUKOY",
          destination: "940GZZLUERC",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=District&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "hammersmith-city",
      name: "Hammersmith & City",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Barking Underground Station - Hammersmith (H&C Line) Underground Station",
          direction: "inbound",
          originationName: "Barking Underground Station",
          destinationName: "Hammersmith (H&C Line) Underground Station",
          originator: "940GZZLUBKG",
          destination: "940GZZLUHSC",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Hammersmith (H&C Line) Underground Station - Barking Underground Station",
          direction: "outbound",
          originationName: "Hammersmith (H&C Line) Underground Station",
          destinationName: "Barking Underground Station",
          originator: "940GZZLUHSC",
          destination: "940GZZLUBKG",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Hammersmith & City&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "jubilee",
      name: "Jubilee",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Stratford Underground Station - Stanmore Underground Station",
          direction: "inbound",
          originationName: "Stratford Underground Station",
          destinationName: "Stanmore Underground Station",
          originator: "940GZZLUSTD",
          destination: "940GZZLUSTM",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Stanmore Underground Station - Stratford Underground Station",
          direction: "outbound",
          originationName: "Stanmore Underground Station",
          destinationName: "Stratford Underground Station",
          originator: "940GZZLUSTM",
          destination: "940GZZLUSTD",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Jubilee&serviceTypes=Regular"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Night",
          uri: "/Line/Route?ids=Jubilee&serviceTypes=Night"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "metropolitan",
      name: "Metropolitan",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Amersham Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Amersham Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUAMS",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Amersham Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Amersham Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUAMS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Chesham Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Chesham Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUCSM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Chesham Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Chesham Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUCSM",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Uxbridge Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Uxbridge Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUUXB",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Uxbridge Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Uxbridge Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUUXB",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Watford Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Watford Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUWAF",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Watford Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Watford Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUWAF",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Amersham Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Amersham Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUAMS",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Amersham Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Amersham Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUAMS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Chesham Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Chesham Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUCSM",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Chesham Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Chesham Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUCSM",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Uxbridge Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Uxbridge Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUUXB",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Uxbridge Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Uxbridge Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUUXB",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Aldgate Underground Station - Watford Underground Station",
          direction: "inbound",
          originationName: "Aldgate Underground Station",
          destinationName: "Watford Underground Station",
          originator: "940GZZLUALD",
          destination: "940GZZLUWAF",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Watford Underground Station - Aldgate Underground Station",
          direction: "outbound",
          originationName: "Watford Underground Station",
          destinationName: "Aldgate Underground Station",
          originator: "940GZZLUWAF",
          destination: "940GZZLUALD",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Metropolitan&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "northern",
      name: "Northern",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.183Z",
      modified: "2022-11-09T09:43:35.183Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "High Barnet Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "High Barnet Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUHBT",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "High Barnet Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "High Barnet Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUHBT",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - High Barnet Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "High Barnet Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUHBT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - High Barnet Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "High Barnet Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUHBT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "Edgware Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUEGW",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "Edgware Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUEGW",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - Edgware Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "Edgware Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUEGW",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - Edgware Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "Edgware Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUEGW",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Mill Hill East Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "Mill Hill East Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUMHL",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Mill Hill East Underground Station - Morden Underground Station",
          direction: "inbound",
          originationName: "Mill Hill East Underground Station",
          destinationName: "Morden Underground Station",
          originator: "940GZZLUMHL",
          destination: "940GZZLUMDN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - Mill Hill East Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "Mill Hill East Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUMHL",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Morden Underground Station - Mill Hill East Underground Station",
          direction: "outbound",
          originationName: "Morden Underground Station",
          destinationName: "Mill Hill East Underground Station",
          originator: "940GZZLUMDN",
          destination: "940GZZLUMHL",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "High Barnet Underground Station - Battersea Power Station Underground Station",
          direction: "inbound",
          originationName: "High Barnet Underground Station",
          destinationName: "Battersea Power Station Underground Station",
          originator: "940GZZLUHBT",
          destination: "940GZZBPSUST",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Battersea Power Station Underground Station - High Barnet Underground Station",
          direction: "outbound",
          originationName: "Battersea Power Station Underground Station",
          destinationName: "High Barnet Underground Station",
          originator: "940GZZBPSUST",
          destination: "940GZZLUHBT",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Edgware Underground Station - Battersea Power Station Underground Station",
          direction: "inbound",
          originationName: "Edgware Underground Station",
          destinationName: "Battersea Power Station Underground Station",
          originator: "940GZZLUEGW",
          destination: "940GZZBPSUST",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Battersea Power Station Underground Station - Edgware Underground Station",
          direction: "outbound",
          originationName: "Battersea Power Station Underground Station",
          destinationName: "Edgware Underground Station",
          originator: "940GZZBPSUST",
          destination: "940GZZLUEGW",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Northern&serviceTypes=Regular"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Night",
          uri: "/Line/Route?ids=Northern&serviceTypes=Night"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "piccadilly",
      name: "Piccadilly",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Uxbridge Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Uxbridge Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUUXB",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Uxbridge Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Uxbridge Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUUXB",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Heathrow Terminal 5 Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Heathrow Terminal 5 Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUHR5",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Heathrow Terminal 5 Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Heathrow Terminal 5 Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUHR5",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Heathrow Terminal 4 Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Heathrow Terminal 4 Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUHR4",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Heathrow Terminal 4 Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Heathrow Terminal 4 Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUHR4",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Uxbridge Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Uxbridge Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUUXB",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Uxbridge Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Uxbridge Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUUXB",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Heathrow Terminal 5 Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Heathrow Terminal 5 Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUHR5",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Heathrow Terminal 5 Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Heathrow Terminal 5 Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUHR5",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Heathrow Terminal 4 Underground Station - Cockfosters Underground Station",
          direction: "outbound",
          originationName: "Heathrow Terminal 4 Underground Station",
          destinationName: "Cockfosters Underground Station",
          originator: "940GZZLUHR4",
          destination: "940GZZLUCKS",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Cockfosters Underground Station - Heathrow Terminal 4 Underground Station",
          direction: "inbound",
          originationName: "Cockfosters Underground Station",
          destinationName: "Heathrow Terminal 4 Underground Station",
          originator: "940GZZLUCKS",
          destination: "940GZZLUHR4",
          serviceType: "Regular",
          validTo: "2022-12-22T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Piccadilly&serviceTypes=Regular"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Night",
          uri: "/Line/Route?ids=Piccadilly&serviceTypes=Night"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "victoria",
      name: "Victoria",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.183Z",
      modified: "2022-11-09T09:43:35.183Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Walthamstow Central Underground Station - Brixton Underground Station",
          direction: "inbound",
          originationName: "Walthamstow Central Underground Station",
          destinationName: "Brixton Underground Station",
          originator: "940GZZLUWWL",
          destination: "940GZZLUBXN",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Brixton Underground Station - Walthamstow Central Underground Station",
          direction: "outbound",
          originationName: "Brixton Underground Station",
          destinationName: "Walthamstow Central Underground Station",
          originator: "940GZZLUBXN",
          destination: "940GZZLUWWL",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-05T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Victoria&serviceTypes=Regular"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Night",
          uri: "/Line/Route?ids=Victoria&serviceTypes=Night"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    },
    {
      $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
      id: "waterloo-city",
      name: "Waterloo & City",
      modeName: "tube",
      disruptions: [],
      created: "2022-11-09T09:43:35.17Z",
      modified: "2022-11-09T09:43:35.17Z",
      lineStatuses: [],
      routeSections: [
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Bank Underground Station - Waterloo Underground Station",
          direction: "inbound",
          originationName: "Bank Underground Station",
          destinationName: "Waterloo Underground Station",
          originator: "940GZZLUBNK",
          destination: "940GZZLUWLO",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-07T00:00:00Z"
        },
        {
          $type: "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
          name: "Waterloo Underground Station - Bank Underground Station",
          direction: "outbound",
          originationName: "Waterloo Underground Station",
          destinationName: "Bank Underground Station",
          originator: "940GZZLUWLO",
          destination: "940GZZLUBNK",
          serviceType: "Regular",
          validTo: "2022-12-23T00:00:00Z",
          validFrom: "2022-11-07T00:00:00Z"
        }
      ],
      serviceTypes: [
        {
          $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
          name: "Regular",
          uri: "/Line/Route?ids=Waterloo & City&serviceTypes=Regular"
        }
      ],
      crowding: {
        $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
      }
    }
  ]