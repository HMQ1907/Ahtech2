import type { BlogRecord, LocaleCode, LocalizedValue, PartnerRecord, ServicePageContent } from '~/types/entities'

export const translate = (value: LocalizedValue, locale: LocaleCode) => value[locale]

export const servicePages: ServicePageContent[] = [
  {
    slug: 'edi',
    eyebrow: { en: 'Infrastructure', vi: 'Hạ tầng' },
    title: { en: 'End-user devices and resilient infrastructure', vi: 'Thiết bị người dùng và hạ tầng vận hành ổn định' },
    summary: {
      en: 'AHTECH plans, supplies, and maintains the hardware backbone that keeps teams moving, from laptops and print fleets to server rooms and secure enterprise networking.',
      vi: 'AHTECH tư vấn, cung cấp và vận hành lớp phần cứng cốt lõi cho doanh nghiệp, từ laptop, máy in đến phòng server và hệ thống mạng doanh nghiệp an toàn.'
    },
    hero: {
      en: 'Built for businesses that need dependable operations, predictable lifecycle management, and a single partner across procurement, deployment, and support.',
      vi: 'Dịch vụ được thiết kế cho doanh nghiệp cần vận hành ổn định, quản lý vòng đời thiết bị rõ ràng và một đầu mối xuyên suốt từ mua sắm đến triển khai và hỗ trợ.'
    },
    bullets: [
      { en: 'Enterprise laptops, workstations, printers, and peripherals', vi: 'Laptop, workstation, máy in và thiết bị ngoại vi cho doanh nghiệp' },
      { en: 'Server, network, and endpoint deployment', vi: 'Triển khai server, hệ thống mạng và endpoint' },
      { en: 'Maintenance packages and device refresh planning', vi: 'Bảo trì định kỳ và lập kế hoạch làm mới thiết bị' }
    ],
    features: [
      {
        title: { en: 'Procurement with operational fit', vi: 'Mua sắm phù hợp thực tế vận hành' },
        description: {
          en: 'Recommend hardware by workload, compliance level, and growth horizon instead of generic catalog bundles.',
          vi: 'Đề xuất thiết bị dựa trên khối lượng công việc, mức độ tuân thủ và kế hoạch tăng trưởng thay vì chọn gói sẵn mặc định.'
        }
      },
      {
        title: { en: 'Deployment and hardening', vi: 'Triển khai và hardening' },
        description: {
          en: 'Prepare devices, network segments, and baseline security controls before rollout to internal teams.',
          vi: 'Chuẩn bị thiết bị, phân đoạn mạng và các cấu hình bảo mật cơ bản trước khi đưa vào sử dụng.'
        }
      },
      {
        title: { en: 'Lifecycle support', vi: 'Hỗ trợ vòng đời thiết bị' },
        description: {
          en: 'Track replacement cycles, warranty windows, and incident patterns to reduce downtime.',
          vi: 'Theo dõi chu kỳ thay mới, bảo hành và sự cố lặp lại để giảm thời gian gián đoạn.'
        }
      }
    ]
  },
  {
    slug: 'sdsi',
    eyebrow: { en: 'Software Delivery', vi: 'Phát triển phần mềm' },
    title: { en: 'Software development and system integration', vi: 'Phát triển phần mềm và tích hợp hệ thống' },
    summary: {
      en: 'From internal portals to tailored business platforms, AHTECH builds practical software that fits the way teams already work while connecting the systems they cannot replace overnight.',
      vi: 'Từ cổng thông tin nội bộ đến nền tảng nghiệp vụ may đo ni đóng, AHTECH xây dựng phần mềm phù hợp quy trình thực tế và kết nối các hệ thống chưa thể thay thế ngay lập tức.'
    },
    hero: {
      en: 'The focus is operational clarity: stable delivery, useful automation, and integrations that remove duplicated manual work across sales, service, logistics, and finance.',
      vi: 'Trọng tâm là sự rõ ràng trong vận hành: giao hàng ổn định, tự động hóa thiết thực và các tích hợp giúp loại bỏ thao tác lặp lại giữa kinh doanh, dịch vụ, logistics và tài chính.'
    },
    bullets: [
      { en: 'Custom web applications and internal dashboards', vi: 'Ứng dụng web may đo ni đóng và dashboard nội bộ' },
      { en: 'ERP, CRM, and back-office integration', vi: 'Tích hợp ERP, CRM và hệ thống back-office' },
      { en: 'Workflow automation and partner connectivity', vi: 'Tự động hóa quy trình và kết nối đối tác' }
    ],
    features: [
      {
        title: { en: 'Domain-led design', vi: 'Thiết kế theo nghiệp vụ' },
        description: {
          en: 'Translate real approval flows, data ownership, and reporting needs into clear product scopes.',
          vi: 'Chuyển hóa quy trình phê duyệt, sở hữu dữ liệu và nhu cầu báo cáo thành phạm vi sản phẩm rõ ràng.'
        }
      },
      {
        title: { en: 'Integration-first delivery', vi: 'Triển khai ưu tiên tích hợp' },
        description: {
          en: 'Connect line-of-business systems, external vendors, and operational data streams into one reliable workflow.',
          vi: 'Kết nối hệ thống nghiệp vụ, nhà cung cấp bên ngoài và luồng dữ liệu vận hành thành một workflow thống nhất và đáng tin cậy.'
        }
      },
      {
        title: { en: 'Incremental modernization', vi: 'Hiện đại hóa từng bước' },
        description: {
          en: 'Replace fragile spreadsheets and legacy touchpoints step by step without forcing a risky big-bang migration.',
          vi: 'Thay thế file tính và điểm chạm cũ từng bước mà không ép doanh nghiệp vào một đợt chuyển đổi rủi ro cao.'
        }
      }
    ]
  },
  {
    slug: 'cis',
    eyebrow: { en: 'Core IT', vi: 'CNTT tổng thể' },
    title: { en: 'Comprehensive IT and cloud operations', vi: 'Giải pháp CNTT tổng thể và vận hành cloud' },
    summary: {
      en: 'AHTECH delivers a full stack of enterprise IT capabilities, combining infrastructure, software, cloud services, security controls, and operating support into one coordinated service layer.',
      vi: 'AHTECH cung cấp đầy đủ năng lực CNTT doanh nghiệp, kết hợp hạ tầng, phần mềm, cloud, bảo mật và vận hành thành một lớp dịch vụ thống nhất.'
    },
    hero: {
      en: 'This is the offering for teams that need a single accountable partner across architecture, implementation, and the day-to-day reliability of critical systems.',
      vi: 'Dịch vụ này phù hợp với các đội ngũ cần một đối tác chịu trách nhiệm xuyên suốt từ kiến trúc, triển khai đến độ ổn định hằng ngày của hệ thống trọng yếu.'
    },
    bullets: [
      { en: 'Hybrid cloud readiness and environment planning', vi: 'Đánh giá sẵn sàng hybrid cloud và quy hoạch môi trường' },
      { en: 'Managed applications and infrastructure services', vi: 'Vận hành ứng dụng và hạ tầng theo dịch vụ' },
      { en: 'Service desk, monitoring, and resilience practices', vi: 'Service desk, giám sát và nâng cao khả năng chịu lỗi' }
    ],
    features: [
      {
        title: { en: 'Hybrid architecture planning', vi: 'Lập kế hoạch kiến trúc hybrid' },
        description: {
          en: 'Balance on-premise realities with cloud opportunities using staged roadmaps and practical governance.',
          vi: 'Cân bằng giữa hiện trạng on-premise và cơ hội cloud bằng lộ trình từng giai đoạn và governance thực tế.'
        }
      },
      {
        title: { en: 'Operational visibility', vi: 'Minh bạch trong vận hành' },
        description: {
          en: 'Design monitoring, alerting, and reporting so issues are seen before they become outages.',
          vi: 'Thiết kế giám sát, cảnh báo và báo cáo để nhìn thấy vấn đề trước khi thành sự cố.'
        }
      },
      {
        title: { en: 'Vendor coordination', vi: 'Điều phối nhà cung cấp' },
        description: {
          en: 'Reduce fragmented ownership by coordinating software, hardware, and service providers under one operating rhythm.',
          vi: 'Giảm tình trạng phân mảnh trách nhiệm bằng cách điều phối phần mềm, phần cứng và nhà cung cấp dịch vụ theo một nhịp vận hành chung.'
        }
      }
    ]
  },
  {
    slug: 'cs',
    eyebrow: { en: 'Security', vi: 'An toàn thông tin' },
    title: { en: 'Cybersecurity that matches business risk', vi: 'An ninh mạng phù hợp mức độ rủi ro doanh nghiệp' },
    summary: {
      en: 'Security at AHTECH is treated as an operating discipline, not a product list. Controls are designed around the systems you actually run and the incidents you can least afford.',
      vi: 'Bảo mật tại AHTECH được xem là kỷ luật vận hành, không phải danh sách sản phẩm. Các kiểm soát được thiết kế xoay quanh hệ thống doanh nghiệp đang chạy và những sự cố không thể chấp nhận.'
    },
    hero: {
      en: 'The result is a stronger defensive posture across identities, infrastructure, endpoints, data, and recovery planning without overwhelming teams with theoretical controls.',
      vi: 'Kết quả là một tư thế phòng thủ mạnh hơn trên danh tính, hạ tầng, endpoint, dữ liệu và kế hoạch phục hồi mà không làm đội ngũ bị quá tải bởi các kiểm soát hình thức.'
    },
    bullets: [
      { en: 'Perimeter, endpoint, and identity security', vi: 'Bảo mật perimeter, endpoint và danh tính' },
      { en: 'Policy design and hardening guidance', vi: 'Thiết kế chính sách và hướng dẫn hardening' },
      { en: 'Backup validation and incident readiness', vi: 'Xác thực backup và sẵn sàng ứng phó sự cố' }
    ],
    features: [
      {
        title: { en: 'Risk-based controls', vi: 'Kiểm soát dựa trên rủi ro' },
        description: {
          en: 'Prioritize controls by business exposure and operational consequence instead of checklist accumulation.',
          vi: 'Ưu tiên kiểm soát dựa trên mức độ ảnh hưởng đến kinh doanh và hậu quả vận hành thay vì tích lũy checklist.'
        }
      },
      {
        title: { en: 'Response readiness', vi: 'Sẵn sàng ứng phó' },
        description: {
          en: 'Improve backup confidence, escalation paths, and recovery playbooks before an incident arrives.',
          vi: 'Nâng cao độ tin cậy của backup, luồng escalation và kịch bản phục hồi trước khi sự cố xảy ra.'
        }
      },
      {
        title: { en: 'Practical governance', vi: 'Governance thực tiễn' },
        description: {
          en: 'Establish policies teams can follow in real day-to-day work, including contractors and distributed operations.',
          vi: 'Xây dựng chính sách mà đội ngũ có thể tuân theo trong công việc hằng ngày, kể cả khi có contractor và vận hành phân tán.'
        }
      }
    ]
  },
  {
    slug: 'ism',
    eyebrow: { en: 'Operations', vi: 'Vận hành' },
    title: { en: 'Information systems management', vi: 'Quản trị hệ thống thông tin' },
    summary: {
      en: 'AHTECH helps clients run technology as a managed capability, with governance, service processes, documentation, and reporting that scale beyond ad hoc troubleshooting.',
      vi: 'AHTECH hỗ trợ khách hàng vận hành công nghệ như một năng lực được quản trị, với governance, quy trình dịch vụ, tài liệu và báo cáo có thể mở rộng vượt qua cách xử lý sự cố mang tính tình huống.'
    },
    hero: {
      en: 'This service supports leaders who need predictable service delivery, better ownership boundaries, and cleaner visibility into capacity, risk, and spend.',
      vi: 'Dịch vụ này phù hợp với lãnh đạo cần mức phục vụ có thể dự đoán, ranh giới trách nhiệm rõ hơn và tầm nhìn tốt hơn về năng lực, rủi ro và chi phí.'
    },
    bullets: [
      { en: 'IT governance and service process design', vi: 'Governance CNTT và thiết kế quy trình dịch vụ' },
      { en: 'Documentation, asset, and change management', vi: 'Tài liệu hóa, quản lý tài sản và thay đổi' },
      { en: 'Performance reporting and continuous improvement', vi: 'Báo cáo hiệu suất và cải tiến liên tục' }
    ],
    features: [
      {
        title: { en: 'Service operating model', vi: 'Mô hình vận hành dịch vụ' },
        description: {
          en: 'Clarify responsibilities, escalation paths, and service expectations across internal and outsourced teams.',
          vi: 'Làm rõ trách nhiệm, luồng escalation và kỳ vọng mức phục vụ giữa đội ngũ nội bộ và đối tác ngoài.'
        }
      },
      {
        title: { en: 'Process maturity', vi: 'Trưởng thành quy trình' },
        description: {
          en: 'Turn undocumented tribal knowledge into repeatable operating procedures and measurable delivery.',
          vi: 'Chuyển kinh nghiệm truyền miệng thành quy trình lặp lại được và có thể đo lường.'
        }
      },
      {
        title: { en: 'Decision support', vi: 'Hỗ trợ ra quyết định' },
        description: {
          en: 'Equip leadership with reporting across incidents, assets, capacity, and roadmap priorities.',
          vi: 'Trang bị cho lãnh đạo các báo cáo về sự cố, tài sản, năng lực vận hành và ưu tiên lộ trình.'
        }
      }
    ]
  }
]

export const featuredServices = servicePages.filter((service) => service.slug !== 'ism').slice(0, 4)

export const findServicePage = (slug: string) => servicePages.find((service) => service.slug === slug)

export const blogPosts: BlogRecord[] = [
  {
    id: 1,
    slug: 'digital-ops-baseline',
    image_url: '/blog_imgs/blog1.jpg',
    created_at: '2026-04-12',
    title: {
      en: 'Building a realistic digital operations baseline',
      vi: 'Xây dựng mặt bằng vận hành số thực tế cho doanh nghiệp'
    },
    summary: {
      en: 'How to assess infrastructure, workflows, and governance before investing in a transformation roadmap.',
      vi: 'Cách đánh giá hạ tầng, quy trình và governance trước khi đầu tư vào lộ trình chuyển đổi số.'
    },
    content: [
      {
        en: 'Transformation programs fail when the baseline is guessed. The first step is to map real systems, ownership, downtime tolerance, and manual workarounds.',
        vi: 'Nhiều chương trình chuyển đổi thất bại vì hiện trạng bị ước đoán. Bước đầu tiên là lập bản đồ hệ thống thực tế, quyền sở hữu, ngưỡng dung lỗi và các cách vận hành thủ công.'
      },
      {
        en: 'A credible baseline shows where operations are fragile and where change can happen without destabilizing the business. That usually means identifying brittle integrations, undocumented responsibilities, and reporting dependencies that leadership cannot yet see clearly.',
        vi: 'Một baseline đáng tin cậy sẽ cho thấy điểm mong manh trong vận hành và nơi có thể thay đổi mà không làm bất ổn doanh nghiệp. Điều này thường đồng nghĩa với việc chỉ ra các tích hợp dễ gãy, trách nhiệm chưa được tài liệu hóa và những phụ thuộc báo cáo mà ban lãnh đạo chưa nhìn thấy rõ.'
      },
      {
        en: 'The assessment should combine technical inventory with workflow observation. Infrastructure diagrams alone do not explain why teams still rely on spreadsheets, side-channel messaging, or duplicated approvals to keep work moving.',
        vi: 'Việc đánh giá nên kết hợp kiểm kê kỹ thuật với quan sát workflow. Chỉ sơ đồ hạ tầng thôi sẽ không giải thích được vì sao đội ngũ vẫn phải dựa vào bảng tính, trao đổi ngoài luồng hay các vòng phê duyệt lặp lại để công việc tiếp tục chạy.'
      },
      {
        en: 'When the current state is described honestly, roadmap conversations become sharper. Budgets can be tied to operational risk reduction, delivery sequencing becomes more realistic, and transformation stops being framed as a cosmetic refresh.',
        vi: 'Khi hiện trạng được mô tả trung thực, các cuộc trao đổi về lộ trình sẽ sắc nét hơn. Ngân sách có thể gắn trực tiếp với việc giảm rủi ro vận hành, thứ tự triển khai trở nên thực tế hơn và chuyển đổi không còn bị đóng khung như một đợt làm mới bề mặt.'
      },
      {
        en: 'A good baseline is not a one-time document. It becomes a reference point for architecture choices, service ownership, and progress reporting so leaders can track whether change is actually improving daily operations.',
        vi: 'Một baseline tốt không phải tài liệu chỉ dùng một lần. Nó trở thành điểm tham chiếu cho các quyết định kiến trúc, quyền sở hữu dịch vụ và báo cáo tiến độ để lãnh đạo theo dõi liệu thay đổi có thực sự cải thiện vận hành hằng ngày hay không.'
      }
    ]
  },
  {
    id: 2,
    slug: 'integration-without-disruption',
    image_url: '/blog_imgs/blog2.jpg',
    created_at: '2026-03-28',
    title: {
      en: 'System integration without operational disruption',
      vi: 'Tích hợp hệ thống mà không gây xáo trộn vận hành'
    },
    summary: {
      en: 'A staged integration approach for ERP, CRM, and service platforms that reduces duplicated work without big-bang risk.',
      vi: 'Cách tích hợp ERP, CRM và hệ thống dịch vụ theo từng giai đoạn để giảm thao tác lặp lại mà không cần big-bang migration.'
    },
    content: [
      {
        en: 'The safest integrations start with narrow workflows and clear data ownership, not broad platform replacement promises.',
        vi: 'Những tích hợp an toàn nhất bắt đầu từ workflow hẹp và quyền sở hữu dữ liệu rõ ràng, không phải lời hứa thay thế toàn bộ nền tảng.'
      },
      {
        en: 'When teams can trust the handoff between systems, reporting quality improves and manual reconciliation drops quickly. The key is sequencing: stabilize one critical handoff first, then expand only after the data and ownership model have been proven.',
        vi: 'Khi đội ngũ tin vào điểm giao giữa các hệ thống, chất lượng báo cáo sẽ tăng và việc đối soát thủ công giảm rất nhanh. Điểm mấu chốt là thứ tự: hãy ổn định một điểm giao quan trọng trước, rồi chỉ mở rộng khi mô hình dữ liệu và quyền sở hữu đã được chứng minh.'
      },
      {
        en: 'Many integration efforts stall because interfaces are built before operating rules are agreed. Which system is the source of truth? Who resolves conflicts? What happens when a downstream platform is unavailable? Those questions determine whether an integration survives first contact with reality.',
        vi: 'Nhiều nỗ lực tích hợp bị chững lại vì giao diện được xây trước khi luật vận hành được thống nhất. Hệ thống nào là nguồn dữ liệu chuẩn? Ai xử lý xung đột? Điều gì xảy ra khi nền tảng downstream bị gián đoạn? Chính những câu hỏi đó quyết định liệu một tích hợp có sống sót sau lần chạm thực tế đầu tiên hay không.'
      },
      {
        en: 'A staged approach usually begins with the workflows that generate the most manual re-entry or the most reporting friction. Once those handoffs are reliable, adjacent processes such as notifications, approvals, and customer updates can be layered in with far less resistance.',
        vi: 'Cách tiếp cận theo giai đoạn thường bắt đầu từ các workflow tạo ra nhiều thao tác nhập lại dữ liệu nhất hoặc gây ma sát báo cáo lớn nhất. Khi những điểm giao đó đã đáng tin cậy, các quy trình lân cận như thông báo, phê duyệt và cập nhật cho khách hàng có thể được thêm vào với ít lực cản hơn nhiều.'
      },
      {
        en: 'Integration is therefore not just a technical exercise. It is an operating design decision that affects accountability, service speed, and the confidence people place in dashboards, reports, and customer commitments.',
        vi: 'Vì vậy, tích hợp không chỉ là một bài toán kỹ thuật. Nó là quyết định thiết kế vận hành ảnh hưởng trực tiếp đến trách nhiệm, tốc độ phục vụ và mức độ tin cậy mà con người đặt vào dashboard, báo cáo và các cam kết với khách hàng.'
      }
    ]
  },
  {
    id: 3,
    slug: 'cybersecurity-for-real-teams',
    image_url: '/blog_imgs/blog3.jpg',
    created_at: '2026-02-19',
    title: {
      en: 'Cybersecurity controls for real teams',
      vi: 'Kiểm soát an ninh mạng phù hợp với đội ngũ thực tế'
    },
    summary: {
      en: 'Security posture improves when controls match how people actually work across endpoints, identities, and vendors.',
      vi: 'Mức độ an toàn tăng lên khi kiểm soát phù hợp với cách con người thực sự làm việc trên endpoint, danh tính và đối tác.'
    },
    content: [
      {
        en: 'The point is not to collect more tools. The point is to reduce the chance that a routine mistake turns into a business outage.',
        vi: 'Mục tiêu không phải thu thập thêm công cụ. Mục tiêu là giảm khả năng một sai sót thông thường biến thành sự cố kinh doanh.'
      },
      {
        en: 'That means focusing on access, backups, patching discipline, and incident paths that teams can follow under pressure. Strong posture comes from repeatable habits and clear ownership, not from the number of products listed in the environment.',
        vi: 'Điều đó đồng nghĩa với tập trung vào truy cập, backup, kỷ luật cập nhật và luồng xử lý sự cố mà đội ngũ có thể thực hiện dưới áp lực. Tư thế an toàn mạnh đến từ thói quen lặp lại được và trách nhiệm rõ ràng, chứ không đến từ số lượng sản phẩm được triển khai trong môi trường.'
      },
      {
        en: 'For most teams, the highest-value controls are also the least glamorous: enforcing access hygiene, validating restore procedures, closing known exposure paths, and ensuring vendors do not become unmanaged extensions of internal risk.',
        vi: 'Với phần lớn đội ngũ, các kiểm soát có giá trị cao nhất cũng là những thứ kém hào nhoáng nhất: siết chặt vệ sinh truy cập, kiểm tra quy trình khôi phục, đóng các điểm phơi lộ đã biết và đảm bảo đối tác không trở thành phần mở rộng không được quản lý của rủi ro nội bộ.'
      },
      {
        en: 'Security programs become more effective when they are described in operational language. Instead of asking whether a framework has been adopted, ask how quickly privileged access is reviewed, how patch exceptions are tracked, and how incident decisions are made at 2 a.m.',
        vi: 'Chương trình bảo mật trở nên hiệu quả hơn khi được mô tả bằng ngôn ngữ vận hành. Thay vì hỏi liệu một framework đã được áp dụng hay chưa, hãy hỏi việc rà soát quyền đặc quyền diễn ra nhanh tới đâu, ngoại lệ cập nhật được theo dõi ra sao và quyết định ứng phó sự cố lúc 2 giờ sáng được đưa ra như thế nào.'
      },
      {
        en: 'When teams understand the practical reason behind each control, adoption improves. The objective is to make safer behavior the easier default, even during busy periods, contractor turnover, or stressed incident response conditions.',
        vi: 'Khi đội ngũ hiểu lý do thực tế đằng sau từng kiểm soát, mức độ tuân thủ sẽ tăng lên. Mục tiêu là biến hành vi an toàn thành lựa chọn dễ nhất, ngay cả trong giai đoạn bận rộn, thay đổi nhân sự thuê ngoài hoặc khi ứng phó sự cố đang ở áp lực cao.'
      }
    ]
  },
  {
    id: 4,
    slug: 'service-management-maturity',
    image_url: '/blog_imgs/blog4.jpg',
    created_at: '2026-01-30',
    title: {
      en: 'Growing service management maturity',
      vi: 'Nâng cao độ trưởng thành trong quản lý dịch vụ CNTT'
    },
    summary: {
      en: 'What changes when incident response, asset records, and change approvals stop depending on tribal knowledge.',
      vi: 'Điều gì thay đổi khi xử lý sự cố, hồ sơ tài sản và phê duyệt thay đổi không còn phụ thuộc vào kinh nghiệm truyền miệng.'
    },
    content: [
      {
        en: 'Maturity starts when service work becomes visible. Tickets, ownership, assets, and approvals need one operating rhythm.',
        vi: 'Sự trưởng thành bắt đầu khi công việc dịch vụ trở nên minh bạch. Ticket, trách nhiệm, tài sản và phê duyệt cần cùng một nhịp vận hành.'
      },
      {
        en: 'From that point onward, teams can improve based on evidence instead of memory. Patterns emerge: recurring incidents, approval bottlenecks, unsupported assets, and changes that regularly destabilize service quality.',
        vi: 'Từ điểm đó trở đi, đội ngũ có thể cải tiến dựa trên dữ liệu thay vì trí nhớ cá nhân. Các mẫu sẽ hiện ra: sự cố lặp lại, nút thắt phê duyệt, tài sản không được hỗ trợ và những thay đổi thường xuyên làm giảm chất lượng dịch vụ.'
      },
      {
        en: 'Service management maturity is often misunderstood as bureaucracy. In practice, the most useful processes are the ones that make work easier to see, easier to assign, and easier to improve. Good structure reduces firefighting because expectations and ownership are no longer implicit.',
        vi: 'Độ trưởng thành của quản lý dịch vụ thường bị hiểu nhầm là quan liêu. Trên thực tế, các quy trình hữu ích nhất là những quy trình khiến công việc dễ nhìn thấy hơn, dễ giao hơn và dễ cải tiến hơn. Cấu trúc tốt giúp giảm chữa cháy vì kỳ vọng và trách nhiệm không còn bị ngầm hiểu nữa.'
      },
      {
        en: 'As maturity grows, leaders gain a better view of capacity, service demand, and systemic risk. That visibility allows investment decisions to be made with more confidence, whether the next step is automation, outsourcing, retraining, or platform consolidation.',
        vi: 'Khi độ trưởng thành tăng lên, lãnh đạo có góc nhìn tốt hơn về năng lực, nhu cầu dịch vụ và rủi ro hệ thống. Sự minh bạch đó cho phép đưa ra quyết định đầu tư với độ tin cậy cao hơn, dù bước tiếp theo là tự động hóa, thuê ngoài, đào tạo lại hay hợp nhất nền tảng.'
      },
      {
        en: 'Ultimately, service management maturity is about building a calmer operating environment. Teams spend less energy reconstructing context and more energy improving the systems that the business depends on every day.',
        vi: 'Cuối cùng, độ trưởng thành trong quản lý dịch vụ là việc xây dựng một môi trường vận hành bình tĩnh hơn. Đội ngũ sẽ tốn ít năng lượng hơn cho việc ghép lại bối cảnh và có nhiều năng lượng hơn để cải thiện những hệ thống mà doanh nghiệp phụ thuộc mỗi ngày.'
      }
    ]
  }
]

export const findBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug)

const partnerFiles = [
  '8R8IuWwlXfngVhvyd2HdmwVZHQC97czbvyOZBCFB.png',
  'a0QBqZruvzjnkujnquHy7LukEASBrmnPAtaAoggC.png',
  'aNOPgXFuZPqp1wIIASMF575Q7u2IHICwM1O1wN8N.png',
  'Erm8kUgzdHcvmjsYfrUOAEuv7BqhXxIHFRZebnYL.png',
  'MCyc080dQ1USyktrugMTzBLUE2h3F0E7W6mQQZKF.png',
  'OorcyzQFp9tAslmNN8yJQAtULB7gzdRyhxRfZlRN.png',
  'PX0plezvcfOigiipNh22a5vq6PFwG2S9euJgUhTV.png',
  'rOYzOuDvV3FpQPaRcyQVPHexW091XCRUNPz8wtNq.png',
  't5HIWn8d1AWI1DuQZfISQ8p3HqAH87CVfrUrtt8R.png',
  'tj7pUS74cmsbnv3uuF3PgGa94FHRJhfUGHe4iGoc.png',
  'WpQ0Ye3LxxBF8FWt8dL34lUKz9zVFEBx7gHmQOZx.png'
]

export const partners: PartnerRecord[] = partnerFiles.map((fileName, index) => ({
  id: index + 1,
  name: {
    en: `Strategic Partner ${String(index + 1).padStart(2, '0')}`,
    vi: `Đối tác chiến lược ${String(index + 1).padStart(2, '0')}`
  },
  logo_url: `/partner_logos/${fileName}`
}))