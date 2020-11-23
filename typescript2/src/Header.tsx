import React from "react";
import './styles.css';
import { HeaderType } from './types';


const Header = ({ title }: HeaderType) => (
  <h1>{title}</h1>
);

export default Header;