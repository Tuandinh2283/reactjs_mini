import React, { useState } from "react";
import "./ChatBox.css";
import ChatBoxIcon from "./ChatBoxIcon";

const faqList = [
  {
    question: "quán mở cửa lúc mấy giờ",
    answer: "⏰ Quán mở cửa từ 7h sáng đến 10h tối mỗi ngày bạn nhé!",
  },
  {
    question: "có giao hàng không",
    answer: "🚚 Quán có giao hàng qua các ứng dụng như Grab, Now, Baemin...",
  },
  {
    question: "địa chỉ quán ở đâu",
    answer: "📍 Quán nằm tại 123 Đường Aroma, TP. Hương Thơm.",
  },
  {
    question: "có wifi không",
    answer: "📶 Có nhé! Wifi miễn phí cho tất cả khách hàng.",
  },
  {
    question: "menu có gì đặc biệt",
    answer:
      "☕️ Bọn mình nổi bật với cà phê cold brew và bánh tiramisu nhà làm!",
  },
  // Học tập
  {
    question: "Làm sao để học tốt môn toán?",
    answer:
      "Để học tốt môn toán, bạn nên nắm vững lý thuyết cơ bản, luyện tập thường xuyên các dạng bài tập và không ngại hỏi khi gặp khó khăn. Kết hợp áp dụng toán học vào thực tế giúp tăng khả năng hiểu bài.",
  },
  {
    question: "Cách học ngoại ngữ hiệu quả?",
    answer:
      "Học ngoại ngữ hiệu quả cần luyện tập đồng đều 4 kỹ năng nghe, nói, đọc, viết, học từ vựng theo ngữ cảnh, thực hành giao tiếp thường xuyên và tạo môi trường ngôn ngữ xung quanh.",
  },
  {
    question: "Phương pháp ghi nhớ nhanh?",
    answer:
      "Phương pháp ghi nhớ nhanh bao gồm lặp lại thông tin, tạo liên kết hình ảnh, sử dụng sơ đồ tư duy và ôn tập theo chu kỳ để tăng độ bền vững của trí nhớ.",
  },
  {
    question: "Làm thế nào để tập trung khi học?",
    answer:
      "Để tập trung, bạn cần tạo môi trường yên tĩnh, tắt các thiết bị gây xao nhãng, chia nhỏ thời gian học và nghỉ ngơi hợp lý theo phương pháp Pomodoro.",
  },
  {
    question: "Học nhóm có tốt không?",
    answer:
      "Học nhóm giúp trao đổi kiến thức, giải đáp thắc mắc nhanh và tăng động lực học tập. Tuy nhiên cần nhóm có kỷ luật và mục tiêu rõ ràng để hiệu quả.",
  },
  {
    question: "Lịch học hợp lý nên thế nào?",
    answer:
      "Lịch học hợp lý là khi bạn phân bổ thời gian cho các môn học, kết hợp thời gian nghỉ ngơi và giải trí, ưu tiên học những môn khó vào thời gian bạn tỉnh táo nhất.",
  },
  {
    question: "Mẹo thi trắc nghiệm dễ đậu?",
    answer:
      "Mẹo thi trắc nghiệm là đọc kỹ đề, loại trừ đáp án sai trước, quản lý thời gian tốt và không nên đoán bừa nếu không có kiến thức cơ bản.",
  },
  {
    question: "Cách luyện đề thi hiệu quả?",
    answer:
      "Luyện đề thi hiệu quả bằng cách làm đề trong điều kiện tương tự thi thật, kiểm tra kỹ lỗi sai và học lại những phần yếu.",
  },
  {
    question: "Nên học online hay học trực tiếp?",
    answer:
      "Học trực tiếp giúp tương tác trực tiếp với giáo viên và bạn bè, còn học online linh hoạt về thời gian và địa điểm. Tùy nhu cầu và tính tự giác để chọn phương pháp phù hợp.",
  },
  {
    question: "Thời gian học bao lâu là đủ?",
    answer:
      "Thời gian học hiệu quả không nên quá dài liên tục, khoảng 25-50 phút mỗi phiên, kèm nghỉ 5-10 phút giúp duy trì sự tập trung và hiệu quả.",
  },
  {
    question: "Học kiểu nào giúp nhớ lâu hơn?",
    answer:
      "Học bằng cách tự tổng hợp, giải thích kiến thức bằng lời của mình, thực hành nhiều và ôn tập định kỳ giúp nhớ lâu.",
  },
  {
    question: "Có nên học thêm ở trung tâm?",
    answer:
      "Học thêm ở trung tâm giúp có hướng dẫn bài bản, tài liệu chuẩn và môi trường học tập tốt nhưng cần chọn trung tâm uy tín và phù hợp với mục tiêu.",
  },
  {
    question: "Cách giải đề Toán nhanh?",
    answer:
      "Giải đề Toán nhanh cần luyện tập nhiều, nắm chắc công thức, biết mẹo giải nhanh và phân bổ thời gian hợp lý cho từng câu.",
  },
  {
    question: "Lời khuyên cho sinh viên năm nhất?",
    answer:
      "Sinh viên năm nhất nên xây dựng thói quen học tập tốt, chủ động trong giao tiếp và tham gia các hoạt động để phát triển kỹ năng mềm.",
  },
  {
    question: "Học từ vựng tiếng Anh thế nào?",
    answer:
      "Học từ vựng tiếng Anh hiệu quả qua việc sử dụng flashcards, học theo chủ đề, lặp lại và thực hành trong giao tiếp.",
  },
  {
    question: "Làm sao để tránh mất tập trung?",
    answer:
      "Để tránh mất tập trung, bạn nên xác định mục tiêu rõ ràng, lập kế hoạch học, tắt các thiết bị không cần thiết và nghỉ giải lao hợp lý.",
  },
  {
    question: "Có nên học thêm kỹ năng mềm?",
    answer:
      "Kỹ năng mềm rất quan trọng giúp bạn giao tiếp, làm việc nhóm và giải quyết vấn đề tốt hơn, vì vậy nên đầu tư thời gian học.",
  },
  {
    question: "Tự học có hiệu quả không?",
    answer:
      "Tự học rất hiệu quả nếu bạn có kỷ luật, biết lập kế hoạch, chọn tài liệu phù hợp và chủ động tìm kiếm sự hỗ trợ khi cần.",
  },
  {
    question: "Cách lên kế hoạch học tập?",
    answer:
      "Lên kế hoạch học tập cần xác định mục tiêu, phân bổ thời gian cho từng môn, ưu tiên phần khó và có thời gian ôn tập.",
  },
  {
    question: "Có nên học nhóm cuối tuần?",
    answer:
      "Học nhóm cuối tuần giúp củng cố kiến thức và giải quyết khó khăn, đồng thời tăng tinh thần học tập chung.",
  },
  {
    question: "Làm thế nào để không bị stress khi học?",
    answer:
      "Để tránh stress khi học, bạn nên giữ thói quen sinh hoạt đều đặn, tập thể dục, ngủ đủ giấc và chia nhỏ khối lượng học tập.",
  },
  {
    question: "Học tập và giải trí nên cân bằng ra sao?",
    answer:
      "Cân bằng học tập và giải trí bằng cách lập thời gian biểu hợp lý, dành thời gian thư giãn giúp tái tạo năng lượng.",
  },
  {
    question: "Cách đọc hiểu nhanh văn bản dài?",
    answer:
      "Đọc hiểu nhanh bằng cách đọc lướt lấy ý chính, đánh dấu từ khóa, tóm tắt đoạn sau khi đọc và tập trung khi đọc.",
  },
  {
    question: "Làm sao để không trì hoãn học?",
    answer:
      "Để không trì hoãn, bạn cần đặt mục tiêu nhỏ, bắt đầu từ việc dễ, loại bỏ yếu tố gây xao nhãng và tự thưởng khi hoàn thành.",
  },
  {
    question: "Học trực tuyến nên lưu ý gì?",
    answer:
      "Học trực tuyến nên lưu ý duy trì kỷ luật, tạo môi trường học tập yên tĩnh và chủ động tương tác với giáo viên và bạn học.",
  },

  // Đá bóng
  {
    question: "Cách sút bóng chuẩn?",
    answer:
      "Sút bóng chuẩn cần căn chỉnh tư thế, dùng mu bàn chân để tạo lực, nhìn theo hướng bóng và luyện tập thường xuyên.",
  },
  {
    question: "Tập kỹ thuật rê bóng thế nào?",
    answer:
      "Tập rê bóng bằng cách kiểm soát bóng gần chân, luyện thay đổi tốc độ và hướng bằng các phần lòng trong, lòng ngoài chân.",
  },
  {
    question: "Làm sao để chạy nhanh trên sân?",
    answer:
      "Chạy nhanh cần rèn luyện thể lực, tập chạy nước rút và giữ kỹ thuật chạy đúng như đầu gối cao và tiếp đất bằng mũi chân.",
  },
  {
    question: "Luyện tập đá phạt hiệu quả?",
    answer:
      "Luyện tập đá phạt hiệu quả bằng cách luyện kỹ thuật sút bóng, tập xác định vị trí đặt bóng và quan sát vị trí cầu thủ đối phương.",
  },
  {
    question: "Tư thế đứng bắt penalty đúng?",
    answer:
      "Tư thế đứng bắt penalty đúng là đứng giữa khung thành, giữ tâm lý bình tĩnh, tập trung quan sát động tác sút bóng của đối phương.",
  },
  {
    question: "Cách phối hợp đội hình đá bóng?",
    answer:
      "Phối hợp đội hình hiệu quả cần giao tiếp, hiểu vai trò từng vị trí và luyện tập chiến thuật cùng nhau.",
  },
  {
    question: "Làm sao tăng sức bền khi đá bóng?",
    answer:
      "Tăng sức bền bằng cách tập thể lực đều đặn, chạy bộ, tập cardio và bổ sung dinh dưỡng hợp lý.",
  },
  {
    question: "Những bài tập chân hiệu quả?",
    answer:
      "Các bài tập chân như squat, chạy bộ, đá bóng tập trung vào cơ đùi, bắp chân giúp tăng sức mạnh và linh hoạt.",
  },
  {
    question: "Cách giữ bóng khi tranh chấp?",
    answer:
      "Giữ bóng khi tranh chấp bằng cách dùng thân người chắn bóng, duy trì thăng bằng và di chuyển nhanh.",
  },
  {
    question: "Lời khuyên cho người mới chơi bóng?",
    answer:
      "Người mới nên luyện kỹ thuật cơ bản, giữ thái độ kiên nhẫn và tham gia nhiều trận đấu để tích lũy kinh nghiệm.",
  },
  {
    question: "Làm sao để kiểm soát bóng tốt hơn?",
    answer:
      "Kiểm soát bóng tốt bằng cách luyện tập kỹ thuật dừng bóng, rê bóng nhẹ nhàng và phản xạ nhanh.",
  },
  {
    question: "Cách luyện phản xạ nhanh?",
    answer:
      "Luyện phản xạ bằng cách tập mắt theo bóng, chơi các trò chơi tốc độ và tập luyện thể lực.",
  },
  {
    question: "Tập thể lực cho cầu thủ như thế nào?",
    answer:
      "Tập thể lực bằng bài tập cardio, nâng tạ nhẹ, chạy nhanh và tăng cường sức mạnh cơ bắp.",
  },
  {
    question: "Đá bóng bao lâu thì phát triển kỹ năng?",
    answer:
      "Thông thường cần luyện tập đều đặn ít nhất 6 tháng đến 1 năm để phát triển kỹ năng cơ bản.",
  },
  {
    question: "Cách phòng thủ hiệu quả?",
    answer:
      "Phòng thủ hiệu quả bằng cách giữ vị trí, quan sát đối thủ và không để khoảng trống.",
  },
  {
    question: "Cách phối hợp với đồng đội trên sân?",
    answer:
      "Phối hợp tốt cần giao tiếp rõ ràng, hiểu ý đồng đội và phối hợp di chuyển.",
  },
  {
    question: "Tư thế sút bóng mạnh và chính xác?",
    answer:
      "Tư thế sút bóng mạnh cần dùng lực toàn thân, tập trung vào điểm tiếp xúc bóng và giữ thăng bằng.",
  },
  {
    question: "Cách giữ thể lực khi thi đấu liên tục?",
    answer:
      "Giữ thể lực bằng chế độ dinh dưỡng hợp lý, nghỉ ngơi đủ và tập phục hồi cơ thể sau thi đấu.",
  },
  {
    question: "Làm sao để phòng tránh chấn thương?",
    answer:
      "Phòng tránh chấn thương bằng cách khởi động kỹ, tập kỹ thuật chuẩn và tránh tập quá sức.",
  },
  {
    question: "Luyện tập đá bóng ngoài trời hay sân trong?",
    answer:
      "Luyện tập sân ngoài trời giúp làm quen thời tiết, sân trong giúp kiểm soát bóng tốt hơn, nên kết hợp cả hai.",
  },
  {
    question: "Cách xử lý bóng trong không gian hẹp?",
    answer:
      "Xử lý bóng trong hẹp bằng cách giữ bóng gần chân, quan sát xung quanh và phối hợp với đồng đội.",
  },
  {
    question: "Làm sao để tăng khả năng chuyền bóng?",
    answer:
      "Tăng khả năng chuyền bóng bằng luyện kỹ thuật chuyền, quan sát đồng đội và chọn thời điểm thích hợp.",
  },
  {
    question: "Kỹ thuật chuyền bóng ngắn và dài?",
    answer:
      "Chuyền ngắn cần lực vừa phải và chính xác, chuyền dài dùng lực nhiều hơn, kết hợp kỹ thuật chân trong và chân ngoài.",
  },
  {
    question: "Cách làm nóng người trước khi đá bóng?",
    answer:
      "Làm nóng bằng chạy nhẹ, các bài tập giãn cơ và tập di chuyển nhanh để tránh chấn thương.",
  },
  {
    question: "Thời gian tập luyện phù hợp cho người mới?",
    answer:
      "Người mới nên tập luyện từ 30 đến 60 phút mỗi ngày, tăng dần cường độ và thời gian theo sức khỏe.",
  },

  // Quán cafe
  {
    question: "Quán mở cửa lúc mấy giờ?",
    answer: "Quán mở cửa từ 7 giờ sáng đến 10 giờ tối hàng ngày.",
  },
  {
    question: "Quán có wifi không?",
    answer: "Quán có cung cấp wifi miễn phí với tốc độ ổn định cho khách hàng.",
  },
  {
    question: "Menu có gì đặc biệt?",
    answer:
      "Menu có đa dạng các loại cà phê rang xay thủ công, đồ uống theo mùa và các món ăn nhẹ.",
  },
  {
    question: "Có chỗ đậu xe không?",
    answer: "Quán có khu vực đậu xe rộng rãi và an toàn cho khách.",
  },
  {
    question: "Có giao hàng không?",
    answer: "Quán có dịch vụ giao hàng trong khu vực lân cận với phí hợp lý.",
  },
  {
    question: "Quán nằm ở đâu?",
    answer: "Quán nằm tại địa chỉ số 123 đường ABC, Quận XYZ, thành phố.",
  },
  {
    question: "Giá cả như thế nào?",
    answer: "Giá cả hợp lý, phù hợp với chất lượng và phục vụ của quán.",
  },
  {
    question: "Quán có chỗ ngồi ngoài trời không?",
    answer:
      "Quán có khu vực ngồi ngoài trời thoáng mát, phù hợp cho những ai thích không gian tự nhiên.",
  },
  {
    question: "Quán có phục vụ đồ ăn nhẹ không?",
    answer:
      "Quán phục vụ đa dạng các món ăn nhẹ như bánh ngọt, sandwich và các loại snack.",
  },
  {
    question: "Có chương trình khuyến mãi nào không?",
    answer:
      "Quán thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt cho khách hàng thân thiết.",
  },
  {
    question: "Quán có chỗ chơi cho trẻ em không?",
    answer: "Quán có khu vực vui chơi an toàn dành cho trẻ em.",
  },
  {
    question: "Có chỗ làm việc yên tĩnh không?",
    answer: "Quán có khu vực yên tĩnh, thích hợp để làm việc hoặc học tập.",
  },
  {
    question: "Đồ uống nào bán chạy nhất?",
    answer: "Đồ uống bán chạy nhất là cà phê sữa đá và các loại trà trái cây.",
  },
  {
    question: "Quán có chỗ hút thuốc không?",
    answer: "Quán có khu vực riêng dành cho người hút thuốc.",
  },
  {
    question: "Có phục vụ đồ uống take away?",
    answer: "Quán có dịch vụ mang đi với các loại đồ uống đóng gói tiện lợi.",
  },
  {
    question: "Quán có không gian trang trí thế nào?",
    answer:
      "Quán được trang trí theo phong cách hiện đại, ấm cúng với nhiều cây xanh.",
  },
  {
    question: "Có tổ chức sự kiện tại quán không?",
    answer:
      "Quán nhận tổ chức các sự kiện nhỏ như sinh nhật, họp nhóm với dịch vụ hỗ trợ chuyên nghiệp.",
  },
  {
    question: "Quán có chỗ ngồi cho nhóm lớn không?",
    answer:
      "Quán có khu vực dành cho nhóm lớn với bàn dài và không gian thoải mái.",
  },
  {
    question: "Quán có phục vụ cà phê đặc sản không?",
    answer:
      "Quán có phục vụ cà phê đặc sản được chọn lọc từ các vùng trồng nổi tiếng.",
  },
  {
    question: "Có phục vụ đồ uống có cồn không?",
    answer: "Quán có phục vụ một số loại đồ uống có cồn như cocktail và bia.",
  },
  {
    question: "Có chương trình thẻ thành viên không?",
    answer: "Quán có chương trình thẻ thành viên với nhiều ưu đãi hấp dẫn.",
  },
  {
    question: "Quán có phục vụ vào cuối tuần không?",
    answer: "Quán hoạt động bình thường và phục vụ đầy đủ vào cuối tuần.",
  },
  {
    question: "Quán có bảo đảm vệ sinh an toàn thực phẩm không?",
    answer:
      "Quán tuân thủ nghiêm ngặt các quy định về vệ sinh an toàn thực phẩm và được kiểm tra định kỳ.",
  },
  {
    question: "Có hỗ trợ đặt chỗ trước không?",
    answer: "Quán có dịch vụ đặt chỗ trước qua điện thoại hoặc website.",
  },
  {
    question: "Quán có dịch vụ wifi tốc độ cao?",
    answer:
      "Quán trang bị wifi tốc độ cao đáp ứng nhu cầu làm việc và giải trí của khách.",
  },

  // Tâm lý phụ nữ
  {
    question: "Tại sao con gái hay giận?",
    answer:
      "Con gái hay giận thường do cảm thấy không được quan tâm, bị tổn thương hoặc hiểu nhầm. Giao tiếp và sự thấu hiểu là cách giúp giảm giận.",
  },
  {
    question: "Làm sao để hiểu tâm lý phụ nữ?",
    answer:
      "Hiểu tâm lý phụ nữ bằng cách kiên nhẫn lắng nghe, quan sát cảm xúc và chia sẻ chân thành.",
  },
  {
    question: "Phụ nữ cần gì trong tình yêu?",
    answer:
      "Phụ nữ cần sự tôn trọng, quan tâm, chia sẻ và cảm giác an toàn trong tình yêu.",
  },
  {
    question: "Làm sao để làm phụ nữ vui?",
    answer:
      "Làm phụ nữ vui bằng những cử chỉ quan tâm, lời khen chân thành và thời gian chất lượng bên nhau.",
  },
  {
    question: "Phụ nữ hay nghĩ gì khi im lặng?",
    answer:
      "Khi im lặng, phụ nữ có thể đang suy nghĩ, cảm thấy buồn hoặc muốn bạn hiểu mà không cần nói.",
  },
  {
    question: "Tâm trạng phụ nữ thay đổi do gì?",
    answer:
      "Tâm trạng thay đổi có thể do hormone, stress, áp lực công việc hoặc chuyện cá nhân.",
  },
  {
    question: "Cách nói chuyện với phụ nữ hiệu quả?",
    answer:
      "Nói chuyện với phụ nữ hiệu quả là biết lắng nghe, chia sẻ và tránh tranh cãi không cần thiết.",
  },
  {
    question: "Phụ nữ cần được tôn trọng thế nào?",
    answer:
      "Tôn trọng phụ nữ bằng cách lắng nghe ý kiến, không xem thường và đối xử công bằng.",
  },
  {
    question: "Tại sao phụ nữ hay quan tâm đến ngoại hình?",
    answer:
      "Ngoại hình giúp phụ nữ tự tin và cảm thấy được trân trọng trong xã hội.",
  },
  {
    question: "Làm sao để hỗ trợ phụ nữ khi họ buồn?",
    answer:
      "Hỗ trợ bằng cách ở bên cạnh, lắng nghe và không phán xét hay đưa ra lời khuyên vội vàng.",
  },
  {
    question: "Phụ nữ sợ điều gì trong mối quan hệ?",
    answer:
      "Phụ nữ sợ bị phản bội, không được quan tâm hoặc không được chia sẻ cảm xúc.",
  },
  {
    question: "Làm sao để xây dựng niềm tin với phụ nữ?",
    answer: "Xây dựng niềm tin bằng sự chân thành, minh bạch và giữ lời hứa.",
  },
  {
    question: "Phụ nữ hay lo lắng về điều gì?",
    answer:
      "Phụ nữ hay lo lắng về công việc, gia đình, sức khỏe và mối quan hệ xã hội.",
  },
  {
    question: "Tâm lý phụ nữ khi mang thai thay đổi thế nào?",
    answer:
      "Tâm lý thay đổi do hormone và áp lực tâm lý, thường dễ xúc động và nhạy cảm hơn.",
  },
  {
    question: "Phụ nữ muốn được gì từ bạn đời?",
    answer:
      "Phụ nữ mong muốn sự chia sẻ, cảm thông và hỗ trợ từ bạn đời trong cuộc sống.",
  },
  {
    question: "Tại sao phụ nữ thích nói chuyện nhiều?",
    answer:
      "Nói chuyện giúp phụ nữ giải tỏa cảm xúc, kết nối và cảm thấy được quan tâm.",
  },
  {
    question: "Cách nhận biết phụ nữ đang stress?",
    answer:
      "Phụ nữ có thể cáu gắt, mệt mỏi, ít giao tiếp hoặc thay đổi thói quen.",
  },
  {
    question: "Phụ nữ thích được tặng gì?",
    answer:
      "Phụ nữ thích được tặng những món quà ý nghĩa, thể hiện sự quan tâm và thấu hiểu.",
  },
  {
    question: "Làm sao để giữ lửa trong tình yêu với phụ nữ?",
    answer:
      "Giữ lửa bằng sự chăm sóc thường xuyên, lắng nghe và tạo bất ngờ nho nhỏ.",
  },
  {
    question: "Phụ nữ và sự nghiệp – làm sao cân bằng?",
    answer:
      "Cân bằng bằng cách hỗ trợ, chia sẻ trách nhiệm gia đình và khích lệ phát triển bản thân.",
  },
  {
    question: "Tại sao phụ nữ hay so sánh bản thân với người khác?",
    answer:
      "So sánh xuất phát từ mong muốn hoàn thiện bản thân và đôi khi do áp lực xã hội.",
  },
  {
    question: "Phụ nữ có cần thời gian riêng không?",
    answer:
      "Phụ nữ cũng cần không gian và thời gian riêng để thư giãn và tự phát triển.",
  },
  {
    question: "Làm sao để phụ nữ cảm thấy an toàn?",
    answer: "Tạo môi trường tin cậy, minh bạch và luôn hỗ trợ khi họ cần.",
  },
  {
    question: "Phụ nữ thường nghĩ gì về ngoại tình?",
    answer:
      "Ngoại tình là sự phản bội lớn gây tổn thương sâu sắc về mặt tình cảm và niềm tin.",
  },
  {
    question: "Cách giải quyết mâu thuẫn với phụ nữ?",
    answer:
      "Giải quyết bằng cách bình tĩnh lắng nghe, thừa nhận sai sót và cùng tìm giải pháp.",
  },
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Xin chào! Mình là chatbot của Aroma Beans Coffee ☕️ Bạn muốn biết gì nè?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [canSend, setCanSend] = useState(true);

  const handleSend = () => {
    if (!input.trim() || loading || !canSend) return;

    setCanSend(false);
    setTimeout(() => setCanSend(true), 3000); // ngăn spam

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const answer = findAnswer(input.toLowerCase());
    if (answer) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: answer }]);
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "🤖 Mình chưa hiểu rõ câu hỏi, bạn có thể nói lại rõ hơn không?",
          },
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  const findAnswer = (msg) => {
    msg = msg.toLowerCase().trim();

    for (let i = 0; i < faqList.length; i++) {
      const question = faqList[i].question.toLowerCase().trim();

      if (msg.includes(question) || question.includes(msg)) {
        return faqList[i].answer;
      }
    }
    return null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbox-container">
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            Aroma Chat
            <button className="exit" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbox-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chatbox-message bot">Đang trả lời...</div>
            )}
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn..."
              disabled={loading || !canSend}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim() || !canSend}
            >
              Gửi
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chatbox-toggle" onClick={() => setIsOpen(true)}>
          <ChatBoxIcon />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
