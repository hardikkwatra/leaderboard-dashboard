"use client"

import { useState, useRef, useEffect } from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bell,
  Settings,
  Copy,
  ChevronUp,
  Award,
  Share2,
  Download,
  Twitter,
  Wallet,
  X,
  MessageCircle,
  Linkedin,
  Shield,
  Star,
  Zap,
  Trophy,
  Sparkles,
  Check,
  Image,
  Link,
} from "lucide-react"
import html2canvas from "html2canvas"

const textShadowStyle = {
  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
}

export default function ClusterDashboard() {
  const [activeTab, setActiveTab] = useState("market")
  const [activeTimeframe, setActiveTimeframe] = useState("24H")
  const [currentPage, setCurrentPage] = useState(7)
  const [showScoreCard, setShowScoreCard] = useState(false)
  const [showBadges, setShowBadges] = useState(false)
  const [showBestBadge, setShowBestBadge] = useState(false)
  const [sortColumn, setSortColumn] = useState("rank")
  const [sortDirection, setSortDirection] = useState("asc")
  const [showNotifications, setShowNotifications] = useState(false)
  const [copyLinkStatus, setCopyLinkStatus] = useState("")
  const [scoreCardCopyStatus, setScoreCardCopyStatus] = useState({
    link: "",
    image: "",
  })
  const scoreCardRef = useRef(null)
  const notificationRef = useRef(null)
  const bellRef = useRef(null)
  const [preparingDownload, setPreparingDownload] = useState(false)

  // Close notifications when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Reset copy status after 2 seconds
  useEffect(() => {
    if (copyLinkStatus) {
      const timer = setTimeout(() => {
        setCopyLinkStatus("")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copyLinkStatus])

  // Reset score card copy status
  useEffect(() => {
    if (scoreCardCopyStatus.link || scoreCardCopyStatus.image) {
      const timer = setTimeout(() => {
        setScoreCardCopyStatus({ link: "", image: "" })
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [scoreCardCopyStatus])

  // Mock data for the leaderboard - Extended with more users for pagination
  const users = [
    {
      id: 1,
      rank: 137,
      name: "McOso.eth",
      handle: "@McOso_",
      twitterFollowers: 797,
      twitterScore: 99,
      walletScore: 32,
      totalScore: 32,
      percentage: "12.42%",
    },
    {
      id: 2,
      rank: 138,
      name: "Felipe Montealegre (IFS)",
      handle: "@TheiaResearch",
      twitterFollowers: 5842,
      twitterScore: 783,
      walletScore: 32,
      totalScore: 32,
      percentage: "13.40%",
    },
    {
      id: 3,
      rank: 139,
      name: "orkun",
      handle: "@x_orkun",
      twitterFollowers: 4823,
      twitterScore: 393,
      walletScore: 32,
      totalScore: 32,
      percentage: "8.15%",
    },
    {
      id: 4,
      rank: 140,
      name: "hitesh.eth",
      handle: "@hmalviya9",
      twitterFollowers: 85705,
      twitterScore: 1448,
      walletScore: 32,
      totalScore: 32,
      percentage: "1.69%",
    },
    {
      id: 5,
      rank: 136,
      name: "yuga.eth",
      handle: "@yugacohler",
      twitterFollowers: 27814,
      twitterScore: 2013,
      walletScore: 32,
      totalScore: 33,
      percentage: "7.24%",
    },
    {
      id: 6,
      rank: 141,
      name: "Mike Dudas",
      handle: "@mdudas",
      twitterFollowers: 168650,
      twitterScore: 5739,
      walletScore: 32,
      totalScore: 32,
      percentage: "3.40%",
    },
    {
      id: 7,
      rank: 142,
      name: "Alex Krüger",
      handle: "@krugermacro",
      twitterFollowers: 207672,
      twitterScore: 2934,
      walletScore: 32,
      totalScore: 32,
      percentage: "1.41%",
    },
    {
      id: 8,
      rank: 143,
      name: "The Assistant",
      handle: "@SonicAssistant",
      twitterFollowers: 6228,
      twitterScore: 173,
      walletScore: 32,
      totalScore: 32,
      percentage: "2.78%",
    },
    // Additional users for pagination
    {
      id: 9,
      rank: 144,
      name: "Crypto Whale",
      handle: "@whale_crypto",
      twitterFollowers: 125000,
      twitterScore: 3500,
      walletScore: 95,
      totalScore: 95,
      percentage: "4.25%",
    },
    {
      id: 10,
      rank: 145,
      name: "DeFi Degen",
      handle: "@defi_master",
      twitterFollowers: 45000,
      twitterScore: 1200,
      walletScore: 75,
      totalScore: 75,
      percentage: "5.10%",
    },
    {
      id: 11,
      rank: 146,
      name: "NFT Collector",
      handle: "@nft_hunter",
      twitterFollowers: 32000,
      twitterScore: 950,
      walletScore: 120,
      totalScore: 120,
      percentage: "6.75%",
    },
    {
      id: 12,
      rank: 147,
      name: "Blockchain Dev",
      handle: "@chain_coder",
      twitterFollowers: 18500,
      twitterScore: 750,
      walletScore: 200,
      totalScore: 200,
      percentage: "9.30%",
    },
    {
      id: 13,
      rank: 148,
      name: "Metaverse Explorer",
      handle: "@meta_traveler",
      twitterFollowers: 22000,
      twitterScore: 820,
      walletScore: 65,
      totalScore: 65,
      percentage: "3.85%",
    },
    {
      id: 14,
      rank: 149,
      name: "DAO Contributor",
      handle: "@dao_builder",
      twitterFollowers: 15000,
      twitterScore: 650,
      walletScore: 180,
      totalScore: 180,
      percentage: "8.20%",
    },
    {
      id: 15,
      rank: 150,
      name: "Crypto Analyst",
      handle: "@crypto_charts",
      twitterFollowers: 75000,
      twitterScore: 2100,
      walletScore: 45,
      totalScore: 45,
      percentage: "2.15%",
    },
    {
      id: 16,
      rank: 151,
      name: "Token Economist",
      handle: "@token_econ",
      twitterFollowers: 28000,
      twitterScore: 920,
      walletScore: 85,
      totalScore: 85,
      percentage: "4.75%",
    },
    // More users for additional pages
    ...[...Array(40)].map((_, i) => ({
      id: 17 + i,
      rank: 152 + i,
      name: `User ${152 + i}`,
      handle: `@user${152 + i}`,
      twitterFollowers: Math.floor(Math.random() * 100000) + 1000,
      twitterScore: Math.floor(Math.random() * 3000) + 100,
      walletScore: Math.floor(Math.random() * 200) + 20,
      totalScore: Math.floor(Math.random() * 200) + 20,
      telegramScore: Math.floor(Math.random() * 200) + 20,
      percentage: (Math.random() * 10 + 1).toFixed(2) + "%",
    })),
  ]

  // Mock data for user badges
  const userBadges = [
    {
      id: 1,
      name: "Diamond Hodler",
      icon: Trophy,
      color: "text-blue-400",
      description: "Held tokens for over 1 year",
      earnedDate: "2023-12-15",
    },
    {
      id: 2,
      name: "Early Adopter",
      icon: Star,
      color: "text-yellow-400",
      description: "Joined during platform beta",
      earnedDate: "2023-10-22",
    },
    {
      id: 3,
      name: "Social Butterfly",
      icon: Sparkles,
      color: "text-purple-400",
      description: "Connected all social accounts",
      earnedDate: "2024-01-05",
    },
    {
      id: 4,
      name: "Liquidity Provider",
      icon: Zap,
      color: "text-green-400",
      description: "Provided liquidity to the protocol",
      earnedDate: "2024-02-18",
    },
    {
      id: 5,
      name: "Community Guardian",
      icon: Shield,
      color: "text-red-400",
      description: "Actively participated in governance",
      earnedDate: "2024-03-01",
    },
  ]

  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: "badge",
      message: "You've earned the Diamond Hodler badge!",
      time: "2 days ago",
      icon: Trophy,
      color: "text-blue-400",
    },
    {
      id: 2,
      type: "rank",
      message: "Your rank increased by 3 positions!",
      time: "5 hours ago",
      icon: ChevronUp,
      color: "text-green-400",
    },
    {
      id: 3,
      type: "profile",
      message: "5 people viewed your profile today",
      time: "1 hour ago",
      icon: MessageCircle,
      color: "text-purple-400",
    },
    {
      id: 4,
      type: "score",
      message: "Your Twitter score increased by 25 points",
      time: "3 hours ago",
      icon: Twitter,
      color: "text-blue-400",
    },
  ]

  // Current user data
  const currentUser = {
    rank: 142,
    name: "Hardik Kwatra",
    handle: "@BRUTALG21614093",
    twitterFollowers: 12453,
    twitterScore: 785,
    telegramScore: 342,
    walletScore: 523,
    totalScore: 1650,
    percentage: "6.3%",
  }

  // Function to handle sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // Function to generate random avatar URL
  const getRandomAvatar = (seed) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
  }

  // Function to handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Function to copy profile link
  const copyProfileLink = () => {
    const profileLink = `https://cluster.protocol/profile/${currentUser.handle}`
    navigator.clipboard.writeText(profileLink)
    setCopyLinkStatus("copied")
  }

  // Function to copy score card link
  const copyScoreCardLink = () => {
    const scoreCardLink = `https://cluster.protocol/scorecard/${currentUser.handle}`
    navigator.clipboard.writeText(scoreCardLink)
    setScoreCardCopyStatus({ ...scoreCardCopyStatus, link: "copied" })
  }

  // Function to copy score card as image
  const copyScoreCardImage = async () => {
    if (scoreCardRef.current) {
      try {
        setScoreCardCopyStatus({ ...scoreCardCopyStatus, image: "processing" })
        const canvas = await html2canvas(scoreCardRef.current)
        canvas.toBlob((blob) => {
          const item = new ClipboardItem({ "image/png": blob })
          navigator.clipboard.write([item])
          setScoreCardCopyStatus({ ...scoreCardCopyStatus, image: "copied" })
        })
      } catch (err) {
        console.error("Error copying image:", err)
        setScoreCardCopyStatus({ ...scoreCardCopyStatus, image: "error" })
      }
    }
  }

  // Function to download score card as image
  const downloadScoreCard = async () => {
    if (scoreCardRef.current) {
      try {
        setPreparingDownload(true)
        // Wait for the state to update and re-render
        await new Promise((resolve) => setTimeout(resolve, 100))

        const canvas = await html2canvas(scoreCardRef.current)
        const link = document.createElement("a")
        link.download = `cluster-scorecard-${currentUser.handle}.png`
        link.href = canvas.toDataURL("image/png")
        link.click()

        // Reset back to view mode
        setPreparingDownload(false)
      } catch (err) {
        console.error("Error downloading image:", err)
        setPreparingDownload(false)
      }
    }
  }

  // Sort users based on current sort settings
  const sortedUsers = [...users].sort((a, b) => {
    let valueA = a[sortColumn]
    let valueB = b[sortColumn]

    // Handle percentage strings
    if (sortColumn === "percentage") {
      valueA = Number.parseFloat(valueA)
      valueB = Number.parseFloat(valueB)
    }

    if (sortDirection === "asc") {
      return valueA > valueB ? 1 : -1
    } else {
      return valueA < valueB ? 1 : -1
    }
  })

  // Get paginated users
  const itemsPerPage = 8
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = sortedUsers.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage)

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center text-white [&_h1]:text-shadow [&_h2]:text-shadow [&_h3]:text-shadow [&_h4]:text-shadow [&_th]:text-shadow [&_.font-bold]:text-shadow [&_.font-medium]:text-shadow"
      style={{
        background: "linear-gradient(135deg, #010101 0%, #121212 100%)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="min-h-screen backdrop-blur-sm backdrop-filter">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-purple-800/30 bg-black/30 backdrop-blur-md backdrop-filter">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Cluster Protocol
              </h1>
              <span className="text-sm ml-2 text-gray-400"></span>
              <span className="font-bold ml-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {/* <span className="mr-1">Leaderboard</span> */}
                {/* <ChevronDown className="h-4 w-4" /> */}
              </div>
              {/* <span>Pre-TGE Arena</span>
              <span>VC Arena</span> */}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* <span>Stake CLUSTER</span> */}
            <div className="flex items-center">{/* <span className="font-bold">Connect</span> */}</div>
            <div className="flex items-center">
              {/* <span>FAQ</span> */}
              {/* <ChevronDown className="h-4 w-4 ml-1" /> */}
            </div>
            <div className="relative">
              <button ref={bellRef} onClick={() => setShowNotifications(!showNotifications)} className="relative">
                <Bell className="h-5 w-5 hover:text-purple-400 transition-colors" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notifications Panel */}
              {showNotifications && (
                <div
                  ref={notificationRef}
                  className="absolute right-0 mt-2 w-80 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg shadow-lg z-[99999] overflow-hidden"
                >
                  <div className="p-3 border-b border-purple-500/20">
                    <h3 className="font-bold">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-400">No notifications</div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-3 border-b border-purple-500/50 hover:bg-purple-900/40 transition-colors"
                        >
                          <div className="flex items-start">
                            <div
                              className={`p-2 rounded-full ${notification.color.replace("text-", "bg-").replace("400", "bg-purple-900")} mr-3`}
                            >
                              <notification.icon className={`h-4 w-4 ${notification.color}`} />
                            </div>
                            <div>
                              <p className="text-sm">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-2 border-t border-purple-500/20 text-center">
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Mark all as read
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              {/* <span>0</span> */}
              <div className="h-8 w-8 ml-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                HK
              </div>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <div className="px-16 py-6 relative z-10">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-xl font-bold border-2 border-purple-400/30">
              HK
            </div>

            <div className="ml-4">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                <span className="text-gray-400 ml-2">{currentUser.handle}</span>
                <div className="relative ml-2">
                  <button onClick={copyProfileLink} className="text-gray-400 hover:text-white transition-colors group">
                    <Copy className="h-4 w-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {copyLinkStatus === "copied" ? "Link copied!" : "Copy link"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <div className="flex items-center bg-black/30 backdrop-blur-md rounded-full px-3 py-1 border border-purple-500/20">
                  {/* <span className="text-purple-400">0</span> */}
                  <span className="text-purple-400">Rank 142</span>
                </div>

                <div className="flex items-center bg-black/30 backdrop-blur-md rounded-full px-3 py-1 ml-2 border border-purple-500/20">
                  <Award className="h-4 w-4 text-purple-400 mr-1" />
                  <span className="text-purple-400">Diamond Holder</span>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-4 px-4 py-2 bg-black/30 backdrop-blur-md backdrop-filter border border-purple-500/30 text-gray-300 rounded-md flex items-center hover:bg-purple-900/40 transition-colors">
            <Wallet className="h-4 w-4 mr-2" />
            Connect your wallet
          </button>
        </div>

        {/* Stats Section */}
        <div className="px-16 grid grid-cols-3 gap-4">
          {/* Total Badges */}
          <div className="bg-black/30 backdrop-blur-md backdrop-filter border border-purple-500/20 rounded-lg p-6 hover:bg-black/40 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Total Badges</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center mt-4">
              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <span className="text-4xl font-bold ml-4">{userBadges.length}</span>
            </div>
            <div className="flex items-center mt-2 text-purple-400">
              <span>+1</span>
              <span className="ml-2 text-gray-400">(24h Change)</span>
            </div>
          </div>

          {/* Best Badge */}
          <div
            className="bg-black/30 backdrop-blur-md backdrop-filter border border-purple-500/20 rounded-lg p-6 hover:bg-black/40 transition-colors cursor-pointer"
            onClick={() => setShowBestBadge(true)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Best Badge</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center mt-4">
              <div className="bg-blue-900/30 p-3 rounded-lg border border-purple-500/30">
                <Trophy className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-2xl font-bold ml-4">Diamond Holder</span>
            </div>
            <div className="flex items-center mt-2 text-purple-400">
              <span>Earned 2 days ago</span>
            </div>
          </div>

          {/* Earned Badges */}
          <div
            className="bg-black/30 backdrop-blur-md backdrop-filter border border-purple-500/20 rounded-lg p-6 hover:bg-black/40 transition-colors cursor-pointer"
            onClick={() => setShowBadges(true)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Earned Badges</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center mt-4">
              <div className="flex -space-x-3">
                {userBadges.slice(0, 3).map((badge, index) => (
                  <div
                    key={badge.id}
                    className={`bg-purple-900/30 p-2 rounded-full border border-purple-500/30 z-${30 - index * 10}`}
                  >
                    <badge.icon className={`h-6 w-6 ${badge.color}`} />
                  </div>
                ))}
                {userBadges.length > 3 && (
                  <div className="bg-purple-900/30 p-2 rounded-full border border-purple-500/30 flex items-center justify-center z-0 w-10 h-10">
                    <span className="text-sm font-bold">+{userBadges.length - 3}</span>
                  </div>
                )}
              </div>
              <span className="text-xl font-bold ml-4">View All Badges</span>
            </div>
            <div className="flex items-center mt-2 text-purple-400">
              <span>Click to see details</span>
            </div>
          </div>
        </div>

        {/* Score Card */}
        <div className="px-16 mt-4">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md backdrop-filter rounded-lg border border-purple-500/20 p-6 hover:from-purple-900/40 hover:to-blue-900/40 transition-colors">
            <h3 className="text-lg font-medium mb-4">Your Score Card</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                <div className="flex justify-between items-center">
                  <span>Twitter Score:</span>
                  <span className="font-bold">{currentUser.twitterScore}</span>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                <div className="flex justify-between items-center">
                  <span>Telegram Score:</span>
                  <span className="font-bold">{currentUser.telegramScore}</span>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                <div className="flex justify-between items-center">
                  <span>Wallet Score:</span>
                  <span className="font-bold">{currentUser.walletScore}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total Score:</span>
                  <span className="font-bold text-xl">{currentUser.totalScore}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowScoreCard(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-md flex items-center transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Score Card
              </button>
            </div>
          </div>
        </div>

        {/* User Rank in Leaderboard */}
        <div className="px-16 mt-8">
          <div className="bg-black/30 backdrop-blur-md backdrop-filter border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Your Current Rank</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-purple-600 to-blue-700 h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold mr-3 border border-purple-400/30">
                  {currentUser.rank}
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-sm font-bold border border-purple-400/30">
                    HK
                  </div>
                  <div className="ml-2">
                    <div className="font-medium">{currentUser.name}</div>
                    <div className="text-sm text-gray-400">{currentUser.handle}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <div className="text-sm text-gray-400">Telegram Score</div>
                  <div className="font-bold">{currentUser.telegramScore}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Wallet Score</div>
                  <div className="font-bold">{currentUser.walletScore}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Twitter Score</div>
                  <div className="font-bold">{currentUser.twitterScore}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Score</div>
                  <div className="font-bold">{currentUser.totalScore}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Badge Modal */}
        {showBestBadge && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm backdrop-filter flex items-center justify-center z-50">
            <div className="bg-black/80 backdrop-blur-md backdrop-filter rounded-lg p-6 max-w-md w-full border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Best Badge</h3>
                <button
                  onClick={() => setShowBestBadge(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="bg-black/60 rounded-lg p-6 border border-purple-500/20 flex flex-col items-center">
                <div className="p-6 rounded-full bg-blue-900/30 border border-blue-500/30 mb-4">
                  <Trophy className="h-16 w-16 text-blue-400" />
                </div>
                <h4 className="font-bold text-2xl text-center mb-2">Diamond Hodler</h4>
                <p className="text-gray-300 text-center mb-4">Held tokens for over 1 year</p>
                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 w-full"></div>
                </div>
                <p className="text-purple-400 text-sm mt-4">
                  Earned on{" "}
                  {new Date("2023-12-15").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Badge Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm">Access to exclusive Diamond Hodler events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm">10% bonus on all staking rewards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm">Priority access to new platform features</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowBestBadge(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Badges Modal */}
        {showBadges && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm backdrop-filter flex items-center justify-center z-50">
            <div className="bg-black/80 backdrop-blur-md backdrop-filter rounded-lg p-6 max-w-2xl w-full border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Your Earned Badges</h3>
                <button
                  onClick={() => setShowBadges(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                {userBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="bg-black/60 rounded-lg p-4 border border-purple-500/20 flex items-start hover:bg-black/70 transition-all"
                  >
                    <div
                      className={`p-3 rounded-full ${badge.color.replace("text-", "bg-").replace("400", "bg-purple-900")} mr-3 flex-shrink-0`}
                    >
                      <badge.icon className={`h-6 w-6 ${badge.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{badge.name}</h4>
                      <p className="text-gray-300 text-sm mt-1">{badge.description}</p>
                      <p className="text-purple-400 text-xs mt-2">
                        Earned on{" "}
                        {new Date(badge.earnedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowBadges(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Score Card Modal */}
        {showScoreCard && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm backdrop-filter flex items-center justify-center z-50">
            <div className="bg-black/80 backdrop-blur-md backdrop-filter rounded-lg p-6 max-w-xl w-full border border-purple-500/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Your Score Card</h3>
                <button
                  onClick={() => setShowScoreCard(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div
                ref={scoreCardRef}
                className="bg-gradient-to-br from-black/80 to-black/80 rounded-lg p-8 mb-6 border border-purple-500/30 relative overflow-hidden backdrop-blur-md backdrop-filter"
                style={{
                  background: preparingDownload
                    ? "linear-gradient(135deg, #010101 0%, #121212 100%)"
                    : "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 20, 0.9) 100%)",
                  backgroundImage: !preparingDownload
                    ? "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, rgba(67, 56, 202, 0.05) 70%)"
                    : "none",
                }}
              >
                {/* Radial rays background */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "repeating-conic-gradient(from 0deg, rgba(139, 92, 246, 0.1) 0deg 15deg, rgba(67, 56, 202, 0.1) 15deg 30deg)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                  }}
                />

                <div className="flex items-center mb-6 relative z-10">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-xl font-bold mr-4 border-2 border-purple-400/50 shadow-lg">
                    HK
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl uppercase">{currentUser.name}</h4>
                    <p className="text-md text-gray-300">{currentUser.handle}</p>
                  </div>
                </div>

                <div className="text-2xl font-bold uppercase mb-6 text-center relative z-10">
                  YAP EARLY, YAP ONLY, YAP OFTEN.
                </div>

                <div className="text-lg mb-6 text-center relative z-10">
                  @_KAITOAI IS CONNECTING AI, ATTENTION, <br />
                  AND CAPITAL, WITH YAPS.
                </div>

                <div className="text-xl font-bold mb-8 text-center relative z-10">PROUD TO BECOME A YAPPER TODAY!</div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                    <h5 className="text-purple-300 font-medium mb-2">Score Summary</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Twitter Score:</span>
                        <span className="font-bold">{currentUser.twitterScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Telegram Score:</span>
                        <span className="font-bold">{currentUser.telegramScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Wallet Score:</span>
                        <span className="font-bold">{currentUser.walletScore}</span>
                      </div>
                      <div className="h-px w-full bg-purple-600/30 my-2"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total Score:</span>
                        <span className="font-bold text-xl">{currentUser.totalScore}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                    <h5 className="text-purple-300 font-medium mb-2">Badge Collection</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Total Badges:</span>
                        <span className="font-bold">{userBadges.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Best Badge:</span>
                        <span className="font-bold text-blue-400">Diamond Hodler</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Latest Badge:</span>
                        <span className="font-bold text-purple-400">Community Guardian</span>
                      </div>
                      <div className="h-px w-full bg-purple-600/30 my-2"></div>
                      <div className="flex items-center justify-center">
                        <div className="flex -space-x-2">
                          {userBadges.slice(0, 3).map((badge, index) => (
                            <div
                              key={badge.id}
                              className={`bg-purple-900/30 p-1 rounded-full border border-purple-500/30`}
                            >
                              <badge.icon className={`h-4 w-4 ${badge.color}`} />
                            </div>
                          ))}
                          {userBadges.length > 3 && (
                            <div className="bg-purple-900/30 p-1 rounded-full border border-purple-500/30 flex items-center justify-center z-0 w-6 h-6">
                              <span className="text-xs font-bold">+{userBadges.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <div className="h-8 w-8 mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-purple-400"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">cluster.protocol</span>
                  </div>
                  <div className="text-sm text-gray-300">Rank #{currentUser.rank}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  className="bg-black/30 hover:bg-purple-900/40 text-white px-3 py-2 rounded-md flex items-center justify-center transition-colors border border-purple-500/20 relative group"
                  onClick={copyScoreCardLink}
                >
                  <Link className="h-4 w-4 mr-2" />
                  {scoreCardCopyStatus.link === "copied" ? "Link Copied!" : "Copy Link"}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {scoreCardCopyStatus.link === "copied" ? "Link copied!" : "Copy link to clipboard"}
                  </span>
                </button>
                <button
                  className="bg-black/30 hover:bg-purple-900/40 text-white px-3 py-2 rounded-md flex items-center justify-center transition-colors border border-purple-500/20 relative group"
                  onClick={copyScoreCardImage}
                >
                  <Image className="h-4 w-4 mr-2" />
                  {scoreCardCopyStatus.image === "copied"
                    ? "Image Copied!"
                    : scoreCardCopyStatus.image === "processing"
                      ? "Processing..."
                      : "Copy Image"}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {scoreCardCopyStatus.image === "copied" ? "Image copied!" : "Copy image to clipboard"}
                  </span>
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=Check%20out%20my%20Cluster%20Protocol%20score%20card!%20Total%20Score:%20${currentUser.totalScore}&url=https://cluster.protocol/scorecard/${currentUser.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white px-3 py-2 rounded-md flex items-center justify-center transition-colors"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Share on Twitter
                </a>
                <button
                  className="bg-black/30 hover:bg-purple-900/40 text-white px-3 py-2 rounded-md flex items-center justify-center transition-colors border border-purple-500/20 relative group"
                  onClick={downloadScoreCard}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Card
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Download as PNG image
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs and Table Section */}
        <div className="px-16 mt-8">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-md flex items-center transition-colors ${activeTab === "market" ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-black/30 backdrop-blur-md border border-purple-500/20 hover:bg-black/40"}`}
                onClick={() => setActiveTab("market")}
              >
                <Award className="h-4 w-4 mr-2" />
                Market
              </button>
              <button
                className={`px-4 py-2 rounded-md flex items-center transition-colors ${activeTab === "emerging" ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-black/30 backdrop-blur-md border border-purple-500/20 hover:bg-black/40"}`}
                onClick={() => setActiveTab("emerging")}
              >
                Emerging Users
              </button>
              <button
                className={`px-4 py-2 rounded-md flex items-center transition-colors ${activeTab === "following" ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-black/30 backdrop-blur-md border border-purple-500/20 hover:bg-black/40"}`}
                onClick={() => setActiveTab("following")}
              >
                My Following
              </button>
            </div>

            <div className="flex bg-black/30 backdrop-blur-md rounded-md overflow-hidden border border-purple-500/20">
              {["24H", "48H", "72H", "7D", "30D", "3M", "6M", "All"].map((timeframe) => (
                <button
                  key={timeframe}
                  className={`px-3 py-1 transition-colors ${activeTimeframe === timeframe ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-purple-900/40"}`}
                  onClick={() => setActiveTimeframe(timeframe)}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-black/30 backdrop-blur-md backdrop-filter rounded-lg overflow-hidden border border-purple-500/20">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("rank")}>
                      <span>Rank</span>
                      {sortColumn === "rank" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("name")}>
                      <span>Name</span>
                      {sortColumn === "name" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("totalScore")}>
                      <span>Telegram Score</span>
                      {sortColumn === "totalScore" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("walletScore")}>
                      <span>Wallet Score</span>
                      {sortColumn === "walletScore" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("twitterScore")}>
                      <span>Twitter Score</span>
                      {sortColumn === "twitterScore" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("twitterFollowers")}>
                      <span>Twitter Followers</span>
                      {sortColumn === "twitterFollowers" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button className="flex items-center" onClick={() => handleSort("percentage")}>
                      <span>Total Score</span>
                      {sortColumn === "percentage" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${index % 2 === 0 ? "bg-purple-900/20" : ""} hover:bg-purple-900/30 transition-colors`}
                  >
                    <td className="px-4 py-3">{user.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full overflow-hidden border border-purple-500/30">
                          <img
                            src={getRandomAvatar(user.id) || "/placeholder.svg"}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-2">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-400">{user.handle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">{user.telegramScore}</td>
                    <td className="px-4 py-3">{user.walletScore}</td>
                    <td className="px-4 py-3">{user.twitterScore}</td>
                    <td className="px-4 py-3">{user.twitterFollowers.toLocaleString()}</td>
                    <td className="px-4 py-3">{user.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Data update info */}
          <div className="text-gray-400 text-sm mt-2">
            Data updates every hour. Rounded to the nearest whole number.
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="flex">
              <button
                className="h-10 w-10 flex items-center justify-center rounded-md bg-black/30 backdrop-blur-md backdrop-filter text-gray-400 hover:bg-purple-900/40 transition-colors border border-purple-500/20"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                className={`h-10 w-10 flex items-center justify-center rounded-md ml-1 transition-colors ${
                  currentPage === 1
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-black/30 backdrop-blur-md backdrop-filter text-gray-400 hover:bg-purple-900/40 border border-purple-500/20"
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>

              {currentPage > 3 && (
                <div className="h-10 w-10 flex items-center justify-center text-gray-400 ml-1">...</div>
              )}

              {Array.from({ length: 5 }, (_, i) => {
                const page = currentPage - 2 + i
                return (
                  page > 1 &&
                  page < totalPages && (
                    <button
                      key={page}
                      className={`h-10 w-10 flex items-center justify-center rounded-md ml-1 transition-colors ${
                        currentPage === page
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-black/30 backdrop-blur-md backdrop-filter text-gray-400 hover:bg-purple-900/40 border border-purple-500/20"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )
              })}

              {currentPage < totalPages - 2 && (
                <div className="h-10 w-10 flex items-center justify-center text-gray-400 ml-1">...</div>
              )}

              <button
                className={`h-10 w-10 flex items-center justify-center rounded-md ml-1 transition-colors ${
                  currentPage === totalPages
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-black/30 backdrop-blur-md backdrop-filter text-gray-400 hover:bg-purple-900/40 border border-purple-500/20"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>

              <button
                className="h-10 w-10 flex items-center justify-center rounded-md bg-black/30 backdrop-blur-md backdrop-filter text-gray-400 hover:bg-purple-900/40 transition-colors ml-1 border border-purple-500/20"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 px-16 py-6 border-t border-purple-800/30 bg-black/30 backdrop-blur-md backdrop-filter">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold mr-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Cluster
              </span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Protocol
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://twitter.com/clusterprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/clusterprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/clusterprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="text-gray-400">© 2025 Cluster Protocol All Rights Reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

