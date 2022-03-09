import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popular from './Popular';
import { PopularSearchResponse } from 'utils/MoviesAPI';
import { Movie } from 'interfaces/Movies';

export default {
    title: 'Popular',
    component: Popular,
} as ComponentMeta<typeof Popular>;

const Template: ComponentStory<typeof Popular> = (args) => <Popular {...args} />;

export const PopularComp = Template.bind({});
PopularComp.args = {
    dataSrc: (type: string) =>
        new Promise<PopularSearchResponse<Movie>>((resolve, reject) => {
            resolve({
                results: [
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                    {
                        id: 1,
                        poster_path: '',
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus repellat nam eum quidem aliquid pariatur id minima, molestias minus hic ducimus officia aliquam velit porro praesentium sunt ipsa? Nesciunt.',
                        release_date: '32',
                        vote_average: 12,
                    },
                ],
            });
        }),
};
