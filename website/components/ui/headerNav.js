
'use client'
import { usePathname } from 'next/navigation';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});



export default function HeaderNav() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    return (
        <Breadcrumbs aria-label="breadcrumb" className='z-40 cursor-pointer'>
            <StyledBreadcrumb
                key={-1}
                component="a"
                href="/"
                label="Home"
            />
            {pathSegments.map((segment, index) => (
                <StyledBreadcrumb
                    key={index}
                    component="a"
                    href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    label={segment}
                />
            ))}
        </Breadcrumbs>
    )
}

