import { devConfig } from './dev.config';
import { prodConfig } from './prod.config';

const isProduction = process.env.NODE_ENV === 'production';

export const config = isProduction ? prodConfig : devConfig;