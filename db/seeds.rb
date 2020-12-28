UserInformations.delete_all
Issue.delete_all
User.delete_all
Enterprise.delete_all
Comment.delete_all

user1 = User.create!({ email: '010aragon010@gmail.com', password: '123456', password_confirmation: '123456', role: 'admin', deactivated: false, confirmed_at: DateTime.now })
user2 = User.create!({ email: 'a@a.com', password: '123456', password_confirmation: '123456', role: 'admin', deactivated: false, confirmed_at: DateTime.now })
user3 = User.create!({ email: 'b@b.com', password: '123456', password_confirmation: '123456', role: 'admin', deactivated: false, confirmed_at: DateTime.now })
user4 = User.create!({ email: 'c@c.com', password: '123456', password_confirmation: '123456', role: 'notifier', deactivated: false, confirmed_at: DateTime.now })
user5 = User.create!({ email: 'd@d.com', password: '123456', password_confirmation: '123456', role: 'notifier', deactivated: false, confirmed_at: DateTime.now })
user6 = User.create!({ email: 'e@e.com', password: '123456', password_confirmation: '123456', role: 'receiver', deactivated: false, confirmed_at: DateTime.now })
user7 = User.create!({ email: 'f@f.com', password: '123456', password_confirmation: '123456', role: 'receiver', deactivated: false, confirmed_at: DateTime.now })
user8 = User.create!({ email: 'g@g.com', password: '123456', password_confirmation: '123456', role: 'notifier', deactivated: true, confirmed_at: DateTime.now })
user9 = User.create!({ email: 'h@h.com', password: '123456', password_confirmation: '123456', role: 'notifier', deactivated: true, confirmed_at: DateTime.now })
user10 = User.create!({ email: 'i@i.com', password: '123456', password_confirmation: '123456', role: 'receiver', deactivated: true, confirmed_at: DateTime.now })
user11 = User.create!({ email: 'j@j.com', password: '123456', password_confirmation: '123456', role: 'receiver', deactivated: true, confirmed_at: DateTime.now })

user1.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user2.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user3.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user4.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user5.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user6.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user7.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user8.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user9.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user10.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })
user11.user_informations.update!({ name: 'Kamil', surname: 'Celejewski', phone_number: '123456789' })

enterprise1 = Enterprise.create!({
  name: 'Netflix',
  description: "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company's primary business is a subscription-based streaming service offering online streaming from a library of films and television series, including those produced in-house."
})
enterprise2 = Enterprise.create!({
  name: 'Amazon',
  description: "Amazon, is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook."
})
Enterprise.create!({
  name: 'Microsoft',
  description: "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers."
})
Enterprise.create!({
  name: 'HBO',
  description: "Home Box Office (HBO) is an American pay television network owned by WarnerMedia Studios & Networks and the flagship property of parent subsidiary Home Box Office, Inc. Maintaining a general entertainment format, programming featured on the network consists primarily of theatrically released motion pictures and original television programs as well as made-for-cable movies, documentaries and occasional comedy and concert specials."
})
Enterprise.create!({
  name: 'Disney',
  description: "The Walt Disney Company, commonly known as Disney is an American diversified multinational mass media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California."
})
Enterprise.create!({
  name: 'From Software',
  description: "FromSoftware, Inc. is a Japanese video game development company founded in November 1986 and a subsidiary of Kadokawa Corporation. The company is best known for the Armored Core and Souls series, as well as Bloodborne and Sekiro: Shadows Die Twice."
})
Enterprise.create!({
  name: 'Riot Games',
  description: "Riot Games, Inc. is an American video game developer, publisher, and esports tournament organizer based in West Los Angeles, California. The company is best known for League of Legends, a multiplayer online battle arena game, and has produced several spin-offs in the same franchise. Riot also operates various esports tournaments for the game, including the League of Legends World Championship, the Championship Series, the European Championship, and the Mid-Season Invitational. "
})
Enterprise.create!({
  name: 'Blizzard Entertainment',
  description: "Blizzard Entertainment, Inc. is an American video game developer and publisher based in Irvine, California. A subsidiary of Activision Blizzard, the company was founded on February 8, 1991, under the name Silicon & Synapse, Inc. by three graduates of the University of California, Los Angeles Michael Morhaime, Frank Pearce and Allen Adham."
})
Enterprise.create!({
  name: 'Google',
  description: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S. information technology industry, alongside Amazon, Facebook, Apple, and Microsoft."
})
Enterprise.create!({
  name: 'CD Project',
  description: "CD Projekt S.A. is a Polish video game developer, publisher and distributor based in Warsaw, founded in May 1994 by Marcin Iwiński and Michał Kiciński. Iwiński and Kiciński were video game retailers before they founded the company, which initially acted as a distributor of foreign video games for the domestic market."
})

user3.update!({ enterprise: enterprise1 })
user4.update!({ enterprise: enterprise1 })
user5.update!({ enterprise: enterprise1 })
user6.update!({ enterprise: enterprise1 })
user7.update!({ enterprise: enterprise1 })
user8.update!({ enterprise: enterprise2 })
user9.update!({ enterprise: enterprise2 })
user10.update!({ enterprise: enterprise2 })
user11.update!({ enterprise: enterprise2 })

Issue.create!({
  issue_type: 'other',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user4.id
})
Issue.create!({
  issue_type: 'equipment',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user4.id
})
Issue.create!({
  issue_type: 'air_conditioning',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user5.id
})
Issue.create!({
  issue_type: 'other',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user5.id
})
Issue.create!({
  issue_type: 'equipment',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user8.id
})
Issue.create!({
  issue_type: 'air_conditioning',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user8.id
})
Issue.create!({
  issue_type: 'other',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user9.id
})
Issue.create!({
  issue_type: 'air_conditioning',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  reported_by_id: user9.id
})