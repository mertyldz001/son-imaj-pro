import { motion } from 'motion/react';
import { ArrowRight, Github, Twitter, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 backdrop-blur-sm bg-black/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          MERTD<span className="text-orange-500">.</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest opacity-60"
        >
          <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white text-black px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Get in touch
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-600 rounded-full blur-[160px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[160px]"
        />
        
        <div className="z-10 text-center max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-6"
          >
            Creative Technologist & Designer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-7xl md:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-8"
          >
            MERTD
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 text-zinc-400"
          >
            <p className="max-w-xs text-sm leading-relaxed text-left border-l border-zinc-800 pl-6">
              Building digital experiences that blend aesthetic precision with technical excellence.
            </p>
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="hidden md:block w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-orange-500" />
            </motion.div>
            <p className="max-w-xs text-sm leading-relaxed text-right md:border-r md:border-zinc-800 pr-6 border-l border-zinc-800 pl-6 md:border-l-0 md:pl-0">
              Focusing on modern web stacks, AI integration, and immersive motion design.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Services/Focus Area */}
      <section id="focus" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Development", desc: "Crafting scalable, high-performance web applications using the latest technologies." },
              { icon: Palette, title: "Design", desc: "Creating visually stunning interfaces that prioritize user experience and brand identity." },
              { icon: Zap, title: "Innovation", desc: "Leveraging AI and emerging tools to push the boundaries of what's possible." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-zinc-900/50 border border-zinc-800 rounded-2xl transition-colors hover:border-orange-500/50 group"
              >
                <item.icon className="w-10 h-10 mb-6 text-zinc-500 group-hover:text-orange-500 transition-colors" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section id="work" className="py-32 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-4">Selected Projects</p>
              <h2 className="text-5xl font-bold tracking-tight">CRAFTED WITH PASSION</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors group">
              View all work <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Nexus Platform", tags: ["SAAS", "AI"], color: "bg-blue-600/20" },
              { title: "Aura Creative", tags: ["E-COMMERCE", "DESIGN"], color: "bg-purple-600/20" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-video ${project.color} rounded-3xl overflow-hidden mb-6 flex items-center justify-center border border-zinc-800 group-hover:border-orange-500/50 transition-colors relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-xl"
                  >
                    <ArrowRight className="w-6 h-6 -rotate-45" />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold tracking-widest border border-zinc-800 rounded-full px-3 py-1 opacity-50">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-3xl font-black mb-4 tracking-tighter uppercase">MERTD<span className="text-orange-500">.</span></div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Available for freelance opportunities and collaborations. Let's build something exceptional together.
            </p>
          </div>
          
          <div className="flex gap-6">
            {[Github, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-2">Developed with AI Studio</p>
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} MERTD DESIGN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

