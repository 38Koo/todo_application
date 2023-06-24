import { GraphQLScalarType } from 'graphql';
import { isValid } from 'date-fns';

const regex = /^\d{4}\/\d{2}\/\d{2}$/;

const validate = (date: unknown): string | never => {
  if (typeof date !== 'string' || !regex.test(date)) {
    throw new Error('dateの値が不正です。');
  }

  const dateArr = date.split('/');
  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const day = Number(dateArr[2]);

  if (!isValid(new Date(year, month, day))) {
    throw new Error('不正な日付です。');
  }

  return date;
};

export const CustomDateScalar = new GraphQLScalarType({
  name: 'date',
  description: 'A simple UUID parser',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
});
