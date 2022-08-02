const sidebars = {
  essifLabSideBar: [
    { label: 'eSSIF-Lab',
      type: 'category',
      link: {type: 'doc', id: 'essifLab'},
      collapsed: false,
      items: [
        'essifLab-vision',
        'essifLab-objectives',
        'essifLab-principles',
        'essifLab-collaborative-understanding',
        'ssi-standards',
        'essifLab-project',
        { label: 'Mental Models',
          type: 'category',
          link: {type: 'doc', id: 'essifLab-pattern-list'},
          collapsed: true,
          items: [
            { label: 'Stable models',
              type: 'category',
              collapsed: false,
              items:
              [ 'terms/pattern-party-actor-action',
                'terms/pattern-jurisdiction',
                'terms/pattern-guardianship',
              ]
            },
            { label: 'Reviewable models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-terminology',
                'terms/pattern-identity',
                'terms/pattern-identification',
                'terms/pattern-identifier',
                'terms/pattern-party-representation',
                'terms/pattern-governance-and-management',
                'terms/pattern-decentralized-grc',
            ]
            },
            { label: 'Envisaged models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-world-model',
                'terms/pattern-semantics',
                'terms/pattern-trust',
                'terms/pattern-decision-making',
                'terms/pattern-mandates-delegation-hiring',
                'terms/pattern-duties-and-rights',
              ]
            },
          ],
        },
        'essifLab-glossary',
      ],
    },
    { label: 'Miscellaneous',
      type: 'category',
      link: {type: 'doc', id: 'miscellaneous'},
      collapsed: true,
      items: [
        'essifLab-fw-governance',
        'essifLab-fw-bus-arch',
        'essifLab-fw-func-arch',
        'essifLab-fw-backlog',
      ],
    },
  ],
  tev2SideBar: [
    'tev2/tev2-overview' ,
    { type: 'category',
      label: 'User\'s Manual',
      link: {type: 'doc', id: 'tev2/man-users'},
      items:
      [ 'tev2/man-usr-wiki',
      , 'tev2/man-usr-repo',
      , 'tev2/man-usr-latex',
      ],
    },
    { type: 'category',
      label: 'Curator\'s Manual',
      link: {type: 'doc', id: 'tev2/man-curators'},
      items:
      [ 'tev2/tev2-installation',
      ],
    },
    { type: 'category',
      label: 'Curator\'s Toolbox',
      link: {type: 'doc', id: 'tev2/toolbox-specs/readme'},
      items:
      [ { type: 'autogenerated',
        dirName: 'tev2/toolbox-specs', // '.' means the current docs folder
//      exclude: [ 'readme' ], // feature being discussed at https://github.com/facebook/docusaurus/issues/5689
        },
      ],
    },
    { type: 'category',
      label: 'Reference Manual',
      items:
      [ { type: 'category',
          label: 'Administration/Files',
          items:
          [ 'tev2/tev2-spec-saf',
            'tev2/tev2-spec-mrg',
          ],
        },
        'tev2/terminology-construction',
        { type: 'category',
          label: 'Curated Texts',
          link: {type: 'doc', id: 'tev2/ctext'},
          items:
          [ 'tev2/ctext-concept',
            'tev2/ctext-pattern',
          ],
        },
        'tev2/various-identifiers',
        'tev2/tev2-spec-term-ref',
      ],
    },
    { type: 'category',
      label: 'TEv2 Glossary',
      items:
      [ { type: 'autogenerated',
        dirName: 'tev2/terms', // '.' means the current docs folder
        },
      ],
    },
    { type: 'category',
      label: 'Miscellaneous',
      items:
      [ 'tev2/tev2-backlog',
        'tev2/toip-terminology-toolbox',
      ],
    },
  ],
};

module.exports = sidebars;
