'use client';

import { ArrowDropDownRounded, ArrowDropUpRounded } from '@mui/icons-material';
import { useMemoizedFn } from 'ahooks';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import styles from './index.module.css';

interface IMenuItem {
  id: string;
  label: string;
}

const menuItems: IMenuItem[] = [
  { id: '1', label: 'All' },
  { id: '2', label: 'Beauty & Personal Care' },
  { id: '3', label: 'Womenwear' },
  { id: '4', label: 'Menwear' },
  { id: '5', label: 'Home Supplies' },
  { id: '6', label: 'Fashion Accessories' },
  { id: '7', label: 'Phones & Electronics' },
  { id: '8', label: 'Muslim Fashion' },
  { id: '9', label: 'Luggage & Bags' },
  { id: '10', label: 'Shoes' },
  { id: '11', label: 'Baby & Maternity' },
  { id: '12', label: 'Kitchenware' },
  { id: '13', label: 'Sports & Outdoor' },
  { id: '14', label: 'Food & Beverage' },
  { id: '15', label: 'Computers & Office Equipment' },
  { id: '16', label: 'Toys & Hobbies' },
  { id: '17', label: 'Kids Fashion' },
  { id: '18', label: 'Pet Supplies' },
  { id: '19', label: 'Household Appliances' },
  { id: '20', label: 'Textiles & Soft Furnishing' },
  { id: '21', label: 'Home Improvement' },
  { id: '22', label: 'Tools & Hardware' },
  { id: '23', label: 'Books, Magazines & Audio' },
  { id: '24', label: 'Health' },
  { id: '25', label: 'Jewelry Accessories & Derivatives' },
  { id: '26', label: 'Furniture' },
  { id: '27', label: 'Collections' },
  { id: '28', label: 'Virtual Products' },
  { id: '29', label: 'Other' },
];

interface IProps {
  category?: string;
}

export default function ProductCategory(props: IProps) {
  const { category } = props;
  const { replace } = useRouter();
  const pathname = usePathname();
  const initSelected = category
    ? menuItems.find(({ label }) => label === category)?.id
    : null;
  const [selected, setSelected] = useState<string>(initSelected ?? '1');
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [labelLength, setLabelLength] = useState<number>(menuItems.length);
  const [hideLength, setHideLength] = useState<number>(0);
  const listConRef = useRef<HTMLDivElement>(null);

  const onActive = useMemoizedFn((menuItem: IMenuItem) => {
    setSelected(menuItem.id);
    const params = new URLSearchParams(window.location.search);
    if (menuItem.id) {
      params.set('category', menuItem.label);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  });

  useLayoutEffect(() => {
    // 方法一
    const listCon = listConRef.current!;
    const labels = listCon.querySelectorAll('button:not([aria-label="展开"])');
    let labelIndex = 0; // 渲染到第几个
    let showExpand = false;
    const listConBottom = listCon.getBoundingClientRect().bottom; // 容器底部距视口顶部距离
    for (let i = 0; i < labels.length; i += 1) {
      const { top } = labels[i]!.getBoundingClientRect();
      if (top >= listConBottom) {
        showExpand = true;
        labelIndex = i;
        break;
      } else {
        showExpand = false;
      }
    }
    if (!showExpand) return;
    const listConRect = listCon.getBoundingClientRect();
    const expandBtn = listCon.querySelector('[aria-label="展开"]');
    const expandBtnWidth = expandBtn!.getBoundingClientRect().width;
    const labelMarginRight = parseInt(
      window.getComputedStyle(labels[0]!).marginRight,
      10,
    );
    for (let i = labelIndex - 1; i >= 0; i -= 1) {
      const labelRight =
        labels[i]!.getBoundingClientRect().right - listConRect.left;
      if (labelRight + labelMarginRight + expandBtnWidth <= listConRect.width) {
        setHideLength(i + 1);
        setLabelLength(i + 1);
        break;
      }
    }
    // 方法二
    // const listCon = listConRef.current!;
    // const labels = listCon.querySelectorAll('button:not([aria-label="展开"])');
    // const firstLabelOffsetLeft = labels[0]!.getBoundingClientRect().left; // 第一个标签左侧偏移量
    // const labelMaringRight = parseInt(
    //   window.getComputedStyle(labels[0]!).marginRight,
    //   10,
    // );
    // let line = 0; // 几行
    // let labelIndex = 0; // 渲染第几个
    // // eslint-disable-next-line @typescript-eslint/no-shadow
    // let showExpandBtn = false;
    // for (let i = 0; i < labels.length; i += 1) {
    //   if (firstLabelOffsetLeft === labels[i]!.getBoundingClientRect().left) {
    //     line += 1;
    //   }
    //   if (line > 2) {
    //     showExpandBtn = true;
    //     labelIndex = i;
    //     break;
    //   } else {
    //     showExpandBtn = false;
    //   }
    // }
    // if (!showExpandBtn) {
    //   return;
    // }
    // setTimeout(() => {
    //   const listConRect = listCon.getBoundingClientRect();
    //   const expandBtn = listCon.querySelector('[aria-label="展开"]')!;
    //   const expandBtnWidth = expandBtn.getBoundingClientRect().width;
    //   for (let i = labelIndex - 1; i >= 0; i -= 1) {
    //     const labelRight =
    //       labels[i]!.getBoundingClientRect().right - listConRect.left;
    //     if (
    //       labelRight + labelMaringRight + expandBtnWidth <=
    //       listConRect.width
    //     ) {
    //       setHideLength(i + 1);
    //       setLabelLength(i + 1);
    //       break;
    //     }
    //   }
    // });
  }, []);

  const changeExpand = useCallback(() => {
    setIsExpand(!isExpand);
    if (!isExpand) {
      setLabelLength(menuItems.length);
    } else {
      setLabelLength(hideLength);
    }
  }, [isExpand, hideLength]);
  return (
    <div
      ref={listConRef}
      className={`mb-[24px] flex h-[82px] flex-wrap overflow-hidden text-[14px] ${isExpand ? styles.expand : ''}`}
    >
      {menuItems.slice(0, labelLength).map((item) => (
        <button
          type="button"
          key={item.id}
          className={`mb-[12px] mr-[24px] rounded-[8px] px-[16px] py-[4px] transition ${item.id === selected ? 'bg-[#D400A2] text-white' : 'bg-[#0000000A] text-[#000000DE]'}`}
          onClick={() => onActive(item)}
        >
          {item.label}
        </button>
      ))}
      <button
        type="button"
        aria-label="展开"
        onClick={changeExpand}
        className="mb-[12px] py-[4px]"
      >
        {!isExpand ? (
          <ArrowDropDownRounded fontSize="small" />
        ) : (
          <ArrowDropUpRounded fontSize="small" />
        )}
      </button>
    </div>
  );
}
