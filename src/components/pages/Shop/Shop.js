import React, { Component } from "react";
import SHOP_DATA from "./ShopData";

import CollectionPreview from "../../CollectionPreview/CollectionPreview";

export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
