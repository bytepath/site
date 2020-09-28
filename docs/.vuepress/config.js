// module.exports = {
//     title: 'BytePath',
//     description: 'Description of Bytepath',
//     plugins: ['vuepress-plugin-table-of-contents'],
// };

let sidebar = {
    // '/components/': [
    //     {
    //         title: 'Components',
    //         collapsable: false,
    //         children: ['standard-component']
    //     }
    // ],
    '/guide/': [
        {
            title: 'Introduction',
            collapsable: false,
            children: ['introduction']
        },
        {
            title: 'The Basics',
            collapsable: false,
            children: ['basictransformations', 'basicanimations']
        },
        {
            title: 'Art Assets',
            collapsable: false,
            children: ['assetcomposition', 'cameracontrol', 'importingassets', 'assetreuse'],
        },
        {
            title: 'Keyframe Animation',
            collapsable: false,
            children: ['keyframeanimations', 'tween', 'fastforwardandrewind', 'animationreuse'],
        },
        {
            title: 'User Input',
            children: ['mouseinput', 'keyboardinput' ],
        },
        {
            title: 'Advanced Animations',
            children: ['renderlessanimations' ],
        },
        {
            title: "Homeless Shelter",
            children: ['domtransformations', 'matrixprop', 'positionclass', 'sampleassets' ],
        }
    ],
};

module.exports = {
    plugins: [
        ['vuepress-plugin-container',
            {
                type: 'demo',
                defaultTitle: "",
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Component Library 🥂',
            description: 'Documentation site for the Vue component library plugin'
        }
    },

    themeConfig: {
        repoLabel: 'Contribute!',
        // git repo here... gitlab, github
        repo: '',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    {text: 'Docs', link: '/guide'},
                    // external link to git repo...again
                ],
                sidebar,
            }
        }
    }
};


//
// function getSideBar(folder, title) {
//     console.log("sidebar this", this);
//     const extension = [".md"];
//
//     const files = fs
//         .readdirSync(path.join(`${__dirname}/../${folder}`))
//         .filter(
//             (item) =>
//                 item.toLowerCase() != "readme.md" &&
//                 fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
//                 extension.includes(path.extname(item))
//         );
//
//     console.log("files is", [{ title: title, children: ["", ...files] }]);
//     return [{ title: title, children: ["", ...files] }];
// }

