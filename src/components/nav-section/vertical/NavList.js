import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// @mui
import { List, Collapse, Link } from '@mui/material';
import NavItem from './NavItem';
import { getActive, isExternalLink } from '..';

// ----------------------------------------------------------------------

NavList.propTypes = {
  data: PropTypes.object,
  depth: PropTypes.number,
  hasChildren: PropTypes.bool,
  isCollapse: PropTypes.bool,
};

export default function NavList({ data, depth, hasChildren, isCollapse = false }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = data.path === pathname.split('/')[1];
  const [open, setOpen] = useState(active);

  const handleClickItem = () => {
    if (!hasChildren) {
      navigate(data.path);
    }
    setOpen(!open);
  };

  return (
    <>
      <NavItem
        item={data}
        active={active}
        depth={depth}
        open={open}
        isCollapse={isCollapse}
        onClick={handleClickItem}
      />
      {/* </Link> */}

      {!isCollapse && hasChildren && (
        <Collapse in={open} unmountOnExit>
          <List component="div" disablePadding>
            <NavSubList data={data.children} depth={depth} />
          </List>
        </Collapse>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
  data: PropTypes.array,
  depth: PropTypes.number,
};

function NavSubList({ data, depth }) {
  return (
    <>
      {data.map((list) => (
        <NavList key={list.title + list.path} data={list} depth={depth + 1} hasChildren={!!list.children} />
      ))}
    </>
  );
}
