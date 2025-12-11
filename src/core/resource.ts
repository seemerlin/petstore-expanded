// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PetstoreTeest } from '../client';

export abstract class APIResource {
  protected _client: PetstoreTeest;

  constructor(client: PetstoreTeest) {
    this._client = client;
  }
}
