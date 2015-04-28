(require 'cljs.closure)
(cljs.closure/build (System/getProperty "cljs") {:main 'cljs.core
                                                 :target :nodejs
                                                 :output-to :print
                                                 :pretty-print true
                                                 :optimizations :simple})
(System/exit 0)
