import React from 'react';
import MyPage from '../../components/my-page/MyPage';
import DashBoardMain from '../../components/my-page/DashBoardMain';

export default function DashBoardPage() {
  return (
    <MyPage title="대시보드">
      <DashBoardMain />
    </MyPage>
  );
}
