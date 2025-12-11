// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PetstoreTest } from '../client';

export abstract class APIResource {
  protected _client: PetstoreTest;

  constructor(client: PetstoreTest) {
    this._client = client;
  }
}
