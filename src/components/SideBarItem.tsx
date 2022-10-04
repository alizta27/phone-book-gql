import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sideItem } from '../constant'
import logo from '../assets/logo.png'
import {
  IconWrapper,
  IconWrapperSecondary,
  ItemWrapper,
  ItemWrapperMobile,
  ItemName,
  ItemNameSecondary,
  LogoWrap,
  NavBarLink
} from '../assets/styles'

interface Props {
  isMobile: boolean;
}
interface ListItem {
  id: number;
  activeIcon: JSX.Element;
  inActiveIcon: JSX.Element;
  title: string;
  path: string;
  isActive: boolean;
}

const SideBarItem: React.FC<Props> = ({ isMobile }) => {
  const [listItems, setListItems] = useState<ListItem[]>([])
  const location = useLocation()
  useEffect(() => {
    sideItem.forEach(el => {
      if (el.path === location.pathname) {
        el.isActive = true
      } else {
        el.isActive = false
      }
    })
    setListItems(sideItem)
  }, [location.pathname])

  const changeTab = (id: number, item: ListItem) => {
    const newListItem = [...listItems]
    const idx = newListItem.findIndex((obj => obj.id === id));
    if (item.isActive) {
      newListItem[idx].isActive = true
      setListItems(newListItem)
    } else {
      newListItem[idx].isActive = true
      newListItem.forEach(el => {
        if (el.id === id) {
          el.isActive = true
        } else {
          el.isActive = false
        }
      })
      setListItems(newListItem)
    }
  }
  if (isMobile) {
    return (
      <>
        <ItemWrapperMobile>
          {
            listItems && listItems.map((item) => {
              return (
                <NavBarLink key={item?.id} to={item?.path}> {
                  item?.isActive ? (
                    <IconWrapper onClick={() => changeTab(item.id, item)}>
                      <span>
                        {item?.activeIcon}
                      </span>
                    </IconWrapper>
                  ) : (
                    <IconWrapperSecondary onClick={() => changeTab(item.id, item)}>
                      <span>
                        {item?.inActiveIcon}
                      </span>
                    </IconWrapperSecondary>
                  )
                }
                </NavBarLink>
              )
            })
          }
        </ItemWrapperMobile>
        <p>time</p>
      </>
    )
  } else {
    return (
      <>
        <ItemWrapper>
          <LogoWrap>
            <img width={150} src={logo} alt="phonebook" />
          </LogoWrap>
          {
            sideItem && sideItem.map((item) => {
              return (
                <NavBarLink key={item?.id} to={item?.path}> {
                  item?.isActive ? (
                    <IconWrapper onClick={() => changeTab(item.id, item)}>
                      <span>
                        {item?.activeIcon}
                      </span>
                      <ItemName>{item?.title}</ItemName>
                    </IconWrapper>
                  ) : (
                    <IconWrapperSecondary onClick={() => changeTab(item.id, item)}>
                      <span>
                        {item?.inActiveIcon}
                      </span>
                      <ItemNameSecondary>{item?.title}</ItemNameSecondary>
                    </IconWrapperSecondary>
                  )
                }
                </NavBarLink>
              )
            })
          }
        </ItemWrapper>
        <p>time</p>
      </>
    )
  }
}
export default SideBarItem