'use client';

import StaggeredMenu from './StaggeredMenu';
import { homeMenuItems, menuColors } from './menuConfig';

export default function HomeMenu() {
  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={homeMenuItems}
      colors={[...menuColors]}
      displaySocials={false}
      displayItemNumbering
      accentColor="#b8c8f8"
      menuButtonColor="#b8c8f8"
      openMenuButtonColor="#b8c8f8"
      changeMenuColorOnOpen={false}
      closeOnClickAway
    />
  );
}
