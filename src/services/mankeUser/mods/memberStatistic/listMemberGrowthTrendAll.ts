/**
 * @description 会员总量增长趋势图会员总数
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = [];

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/memberStatistic/listMemberGrowthTrendAll',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || [];
  } else {
    throw new Error();
  }
}
