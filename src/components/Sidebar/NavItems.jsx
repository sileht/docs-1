/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Button,
  Collapse,
  Stack,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { FiChevronDown, FiChevronRight, FiExternalLink } from 'react-icons/fi';

import {
  PathContext,
  getFullPath,
  isPathActive,
  isUrl,
  useTagColors,
} from '../../utils';

export const NavContext = createContext();

const getItemPaths = (items, basePath) => items.flatMap(({ path, children }) => (
  children ? getItemPaths(children, basePath) : getFullPath(path, basePath)
));

const BASE_ITEM_PADDING = 4;

function NavButton({
  isActive, depth, children, ...props
}) {
  const [activeBg, activeTextColor] = useTagColors();
  const activeHoverBg = useColorModeValue('blue.50', 'blue.500');

  const buttonProps = isActive && {
    bg: activeBg,
    color: activeTextColor,
    _hover: {
      bg: activeHoverBg,
    },
  };

  return (
    <Button
      h="auto"
      py={depth ? 1.5 : 2.5} // give top level nav items larger padding
      // eslint-disable-next-line react/prop-types
      pl={depth * 2 + BASE_ITEM_PADDING}
      whiteSpace="normal"
      variant="ghost"
      roundedLeft="none"
      roundedRight="full"
      fontWeight="normal"
      {...buttonProps}
      {...props}
    >
      <chakra.span>{children}</chakra.span>
    </Button>
  );
}

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  depth: PropTypes.number.isRequired,
};

function NavGroup({ group, depth }) {
  const { nav, setNav } = useContext(NavContext);
  const { basePath, uri } = useContext(PathContext);

  const isOpen = nav[group.id];
  const isActive = getItemPaths(group.children, basePath).some((path) => isPathActive(path, uri));

  return (
    <div>
      <NavButton
        mb="1"
        fontWeight="strong"
        isActive={isActive}
        data-group={!depth && isActive}
        rightIcon={isOpen ? <FiChevronDown /> : <FiChevronRight />}
        onClick={() => {
          const open = !isOpen;
          setNav({
            ...nav,
            [group.id]: open,
          });
        }}
        depth={depth}
        leftIcon={group.icon}
        color="linkedin.700" // Color title of groups
      >
        {group.title}
      </NavButton>
      <Collapse unmountOnExit in={isOpen}>
        <NavItems
          uri={uri}
          items={group.children}
          basePath={basePath}
          depth={depth + 1}
        />
      </Collapse>
    </div>
  );
}

NavGroup.propTypes = {
  group: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
};

export default function NavItems({ items, depth = 0 }) {
  const { basePath, uri } = useContext(PathContext);

  return (
    <Stack spacing="1" align="flex-start" pb={depth && 3}>
      {items.map((item, index) => {
        if (item.children) {
          return <NavGroup key={index} group={item} depth={depth} />;
        }

        if (isUrl(item.path)) {
          const buttonProps = !item.path.startsWith(
            'https://www.apollographql.com',
          ) && {
            target: '_blank',
            rel: 'noreferrer noopener',
            rightIcon: <FiExternalLink />,
          };
          return (
            <NavButton
              key={index}
              as="a"
              depth={depth}
              href={item.path}
              {...buttonProps}
            >
              {item.title}
            </NavButton>
          );
        }

        const path = getFullPath(item.path, basePath);
        const isActive = isPathActive(path, uri);
        return (
          <NavButton
            key={index}
            isActive={isActive}
            depth={depth}
            as={GatsbyLink}
            to={path}
          >
            {item.title}
          </NavButton>
        );
      })}
    </Stack>
  );
}

NavItems.propTypes = {
  items: PropTypes.array.isRequired,
  depth: PropTypes.number,
};
