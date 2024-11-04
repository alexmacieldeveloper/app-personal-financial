import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemProps } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type ListItemLinkProps = {
  to: string;
  icon?: React.ReactNode;
  primary: string;
  onClick?: () => void;
} & ListItemProps;

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, primary, onClick, ...other }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItem button component={renderLink} onClick={onClick} {...other} style={{textDecoration: 'none', color: '#000000'}}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default ListItemLink;
