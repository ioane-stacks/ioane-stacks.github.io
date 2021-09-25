import image1 from './BlogListImages/1.jpg';
import image2 from './BlogListImages/2.jpg';
import image3 from './BlogListImages/3.jpg';

import gallery1 from './ImageGallery/1.jpg';
import gallery2 from './ImageGallery/2.jpg';
import gallery3 from './ImageGallery/3.jpg';

export const BlogData = [
    {
        title: 'Best donuts of Tbilisi',
        image: image1,
        upload: "9/23/2021",
        city: "Tbilisi",
        street: "Marjanishvili",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec finibus metus, eu ornare ex. Nullam vitae urna sed ligula interdum cursus ut a felis. Proin venenatis ornare orci, sed pellentesque eros efficitur a. Donec tempus magna eu est vulputate lacinia. Aliquam et scelerisque nunc, a faucibus libero. Curabitur auctor enim euismod metus suscipit, commodo aliquam mi accumsan. Integer elementum lobortis ex, in malesuada leo lacinia sit amet. Cras eu aliquam lectus. Fusce porttitor magna quis est pretium, ac egestas tortor porta. Aenean neque enim, pellentesque sed scelerisque non, lobortis condimentum nisl. Cras sed tortor et orci lacinia luctus sed lacinia massa. Morbi vestibulum massa sem, sed mollis libero interdum eu. Nulla non est tincidunt, maximus est in, tempus augue. Integer condimentum pellentesque commodo. Proin vulputate sapien dignissim magna tristique, vel mattis mauris accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam metus mauris, efficitur ultricies rutrum sit amet, vehicula nec orci. Duis mauris ex, cursus in velit finibus, viverra imperdiet nulla. Nunc sollicitudin quam mi, vel ultrices metus imperdiet eu. Duis ac aliquam leo. Sed sit amet nulla eget ex pellentesque scelerisque. Cras eget commodo erat. Curabitur sodales hendrerit diam vel viverra. Vestibulum condimentum, lectus ac egestas gravida, eros neque iaculis risus, in euismod erat ante eget diam. Duis ac erat imperdiet, hendrerit enim id, posuere urna. Morbi at luctus turpis. Etiam molestie pretium libero nec egestas. Cras venenatis massa libero, id maximus ante sollicitudin vitae.Vestibulum lacinia sed urna ac varius. Vestibulum at interdum massa, eu blandit augue. Donec sed lorem id leo malesuada volutpat nec nec urna. In hac habitasse platea dictumst. Nulla tempor odio sed nunc fermentum luctus. Fusce pulvinar ipsum quam, sit amet posuere odio tempor vel. Etiam interdum venenatis mi et feugiat. Sed facilisis, orci id cursus elementum, ex eros rhoncus arcu, vitae placerat augue risus eu quam. Sed euismod turpis non risus faucibus scelerisque. Pellentesque rhoncus venenatis fermentum. Sed auctor neque id imperdiet commodo. Aenean libero nisl, hendrerit sit amet sagittis a, vulputate finibus tortor. Fusce non erat sit amet diam eleifend imperdiet id nec neque. Ut lorem est, finibus dignissim justo at, pulvinar ultrices mi. In hac habitasse platea dictumst.Integer massa risus, egestas id velit nec, congue placerat sapien. Morbi erat tellus, porta sit amet varius a, tempus suscipit enim. Sed sodales, neque at lacinia finibus, elit dui imperdiet tortor, id sollicitudin ipsum purus non dolor. Nulla laoreet tellus quis maximus varius. Aliquam erat volutpat. Etiam sed commodo mauris, sit amet fermentum nunc. Aenean nec erat malesuada, pretium erat et, volutpat dolor. Maecenas maximus elit eget turpis laoreet laoreet. Nam posuere erat mi. Nunc ut tempor dolor. Nullam feugiat mi massa, a vulputate ipsum feugiat vel.Nunc ac tincidunt est, lobortis aliquam dolor. Ut rutrum elit sit amet posuere placerat. Aenean lacus odio, rhoncus in tellus a, auctor venenatis lacus. Vestibulum sed nisl id ex dignissim luctus. Curabitur sollicitudin, eros a dapibus sagittis, odio augue ullamcorper tortor, auctor laoreet ligula enim eu lorem. Proin pretium maximus risus in accumsan. Praesent.",
        id: 1
    },
    {
        title: 'Get 50% off every friday',
        image: image2,
        upload: "9/24/2021",
        city: "Tbilisi",
        street: "Rustaveli",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec finibus metus, eu ornare ex. Nullam vitae urna sed ligula interdum cursus ut a felis. Proin pretium maximus risus in accumsan. Praesent.",
        hasGallery: true,
        images: [
            {url: gallery1},
            {url: gallery2},
            {url: gallery3}
        ],
        id: 2
    },
    {
        title: 'Buy 4 donuts and get a coffee for free',
        image: image3,
        upload: "9/25/2021",
        city: "Tbilisi",
        street: "Liberty Square",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec finibus metus, eu ornare ex. Cras eget commodo erat. Curabitur sodales hendrerit diam vel viverra. Vestibulum condimentum, lectus ac egestas gravida, eros neque iaculis risus, in euismod erat ante eget diam. Duis ac erat imperdiet, hendrerit enim id, posuere urna. Morbi at luctus turpis. Etiam molestie pretium libero nec egestas. Cras venenatis massa libero, id maximus ante sollicitudin vitae.Vestibulum lacinia sed urna ac varius. Vestibulum at interdum massa, eu blandit augue. Donec sed lorem id leo malesuada volutpat nec nec urna. In hac habitasse platea dictumst. Nulla tempor odio sed nunc fermentum luctus. Fusce pulvinar ipsum quam, sit amet posuere odio tempor vel. Etiam interdum venenatis mi et feugiat. Sed facilisis, orci id cursus elementum, ex eros rhoncus arcu, vitae placerat augue risus eu quam. Sed euismod turpis non risus faucibus scelerisque. Pellentesque rhoncus venenatis fermentum. Sed auctor neque id imperdiet commodo. Aenean libero nisl, hendrerit sit amet sagittis a, vulputate finibus tortor. Fusce non erat sit amet diam eleifend imperdiet id nec neque. Ut lorem est, finibus dignissim justo at, pulvinar ultrices mi. In hac habitasse platea dictumst.Integer massa risus, egestas id velit nec, congue placerat sapien. Morbi erat tellus, porta sit amet varius a, tempus suscipit enim. Sed sodales, neque at lacinia finibus, elit dui imperdiet tortor, id sollicitudin ipsum purus non dolor. Nulla laoreet tellus quis maximus varius. Aliquam erat volutpat. Etiam sed commodo mauris, sit amet fermentum nunc. Aenean nec erat malesuada, pretium erat et, volutpat dolor. Maecenas maximus elit eget turpis laoreet laoreet. Nam posuere erat mi. Nunc ut tempor dolor. Nullam feugiat mi massa, a vulputate ipsum feugiat vel.Nunc ac tincidunt est, lobortis aliquam dolor. Ut rutrum elit sit amet posuere placerat. Aenean lacus odio, rhoncus in tellus a, auctor venenatis lacus. Vestibulum sed nisl id ex dignissim luctus. Curabitur sollicitudin, eros a dapibus sagittis, odio augue ullamcorper tortor, auctor laoreet ligula enim eu lorem. Proin pretium maximus risus in accumsan. Praesent.",
        id: 3
    }
];