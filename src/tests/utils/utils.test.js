import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import {
  convertDateToFormatt,
  filterCategory,
  formatMoney
} from '../../../src/utils'

describe("Formatt date function", () => {
  test("formatt to date human", () => {
    const input = new Date();

    const output = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    expect(convertDateToFormatt(input).substring(0, 10)).toMatch(output);

  });
});

describe("Filter label category", () => {
  test("filter category label", () => {
    const input = 2;

    const output = 'Sueldo';

    expect(filterCategory(input)).toEqual(output);

  });
});

describe("Format money", () => {
  test("format money render", () => {
    const input = 20;

    const output = '20,00';

    expect(formatMoney(input)).toEqual(output);

  });
});