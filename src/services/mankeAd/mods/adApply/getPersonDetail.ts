/**
 * @description 获取个人广告主申请详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.ApplyPersonDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adApply/getPersonDetail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.ApplyPersonDetailDTO();
  } else {
    throw new Error();
  }
}
