/**
 * @description 更新个人审核状态
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = undefined;

export async function fetch(data = {}) {
  const result = await request().post(
    backEndUrl + '/adApply/updatePersonApproveStatus',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || undefined;
  } else {
    throw new Error();
  }
}
