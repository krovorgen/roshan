import React, { useState } from 'react';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';

import styles from './Root.module.scss';

export const Root = () => {
  const [value, setValue] = useState('');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
    const [firstTime, secondTime] = value.split(' ');
    const resultText = `Kill roshan in ${value}: respawn from ${+firstTime + 8}:${secondTime} to ${
      +firstTime + 11
    }:${secondTime}`;
    await navigator.clipboard.writeText(resultText);
    alert(resultText);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input required block onChange={onChange} value={value} />
      <Button type="submit" block>
        Расчитать
      </Button>
    </form>
  );
};
