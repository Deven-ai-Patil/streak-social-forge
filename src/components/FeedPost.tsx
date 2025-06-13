
interface FeedPostProps {
  post: {
    id: number;
    author: string;
    handle: string;
    time: string;
    content: string;
    streak: number;
    avatar: string;
  };
  delay: number;
  isVisible: boolean;
}

const FeedPost = ({ post, delay, isVisible }: FeedPostProps) => {
  return (
    <div 
      className={`p-6 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {post.avatar}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white">{post.author}</span>
            <span className="text-white/60 text-sm">{post.handle}</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">{post.time}</span>
            <div className="ml-auto flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded-full">
              <span className="text-orange-500 text-xs">🔥</span>
              <span className="text-orange-500 text-xs font-medium">{post.streak}</span>
            </div>
          </div>
          
          <p className="text-white/90 leading-relaxed">{post.content}</p>
          
          <div className="flex items-center gap-6 mt-3 text-white/60">
            <button className="flex items-center gap-1 hover:text-white transition-colors text-sm">
              💬 <span>Reply</span>
            </button>
            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors text-sm">
              🔥 <span>Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
