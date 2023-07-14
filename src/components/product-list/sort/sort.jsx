import React from "react";
import { useTranslation } from "react-i18next";

const Sort = () => {
  const { t } = useTranslation();

  return (
    <>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected hidden>{t('product-list.sort.title')}</option>
        <option value="1">{t('product-list.sort.op1')}</option>
        <option value="2">{t('product-list.sort.op2')}</option>
      </select>

    </>
  );
};

export default Sort;
