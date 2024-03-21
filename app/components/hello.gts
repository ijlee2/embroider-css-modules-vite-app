import { local } from 'embroider-css-modules';

import styles from './hello.module.css';

<template>
  <div class={{local styles "message" "emphasize"}}>
    Hello Vite!
  </div>
</template>
