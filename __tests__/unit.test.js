// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid long phone number', () => {
  expect(isPhoneNumber('123-123-123-1234')).toBe(true);
});

test('invalid phone number short', () => {
  expect(isPhoneNumber('911')).toBe(false);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('valid email with numbers', () => {
  expect(isEmail('1234@aol.co')).toBe(true);
});

test('invalid email', () => {
  expect(isEmail('test@aol.comm')).toBe(false);
});

test('invalid email missing @', () => {
  expect(isEmail('testaol.comm')).toBe(false);
});

// isStrongPassword
test('valid strong password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('valid strong password wtih numbers', () => {
  expect(isStrongPassword('abcd1234')).toBe(true);
});

test('invalid strong password too short', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('invalid strong password too long', () => {
  expect(isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});

// isDate
test('valid date single digit format', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('valid date double digit format', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('invalid date letters', () => {
  expect(isDate('a1/01/2000')).toBe(false);
});

test('invalid date wrong format', () => {
  expect(isDate('01/01/00')).toBe(false);
});

// isHexColor
test('valid hex color length 3', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('valid hex color length 6', () => {
  expect(isHexColor('#000000')).toBe(true);
});

test('invalid hex color too short', () => {
  expect(isHexColor('00')).toBe(false);
});

test('invalid hex color too long', () => {
  expect(isHexColor('#abc0323')).toBe(false);
});