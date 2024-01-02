import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Stack from '@mui/material/Stack';

// button functionality, short circuiting

const dummyTags = [{ icon: <FaceIcon />, label: 'Face' }, { icon: <FaceIcon />, label: 'Face' }, { icon: <FaceIcon />, label: 'Face' }]

function ModelTag({ icon, tagLabel }) {
    return (<Link href='#'><Chip icon={icon} label={tagLabel}></Chip></Link>)
}

function ModelTags() {
    return <Stack direction="row" spacing={1}>
        {dummyTags.map((tag) => <ModelTag icon={tag.icon} key={tag.label} tagLabel={tag.label} />)}
    </Stack>

}

function IconCheckboxes() {
    return (
        <div>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            />
        </div>
    );
}

export default function ModelCard({ modelName, modelDetail, modelImage, learnLink, IntegrateLink }) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/images/test.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Model Name <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                    />
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Model Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </Typography>
            </CardContent>
            <CardContent>
                <ModelTags />
            </CardContent>
            <CardActions>
                <Button size="small"><Link href='#'>Integrate</Link></Button>
                <Button size="small"><Link href='#'>View Detail</Link></Button>
                <Button size="small"><Link href='#'>Demo</Link></Button>
            </CardActions>
        </Card>
    );
}
