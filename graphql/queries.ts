import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        City
        Lat
        Long
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;

const GET_TRACKING_ITEMS = gql`
  query GetTrackingItems {
    getTrackingItems {
      value {
        customer {
          email
          name
        }
        customer_id
        items {
          item_id
          name
          price
          quantity
        }
      }
      name
    }
  }
`;
